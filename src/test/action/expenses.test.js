import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, removeExpense, editExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

test('should set up remove expense action object', () => {
    const action = removeExpense( {id: '123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should set up edit expense action object', () => {
    const action = editExpense('123456', {description:'345', amount:5});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123456',
        updates: {
            description:'345',
            amount:5
        }
    })
})
// test ('should set up add expense action object with provided values', () => {
//     const expenseData = {
//         description: 'abcd',
//         note: 'vtkvn5kbnktb', 
//         amount: 58, 
//         createdAt: 1000000 
//     }
//     const action = addExpense(expenses[2]);
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense: expenses[2]
//     })
//  });
//  test('should add expense to database and store',(done) =>{
//     const store = createMockStore({})
//     const expenseData= {
//         description: 'mouse',
//         amount:5000,
//         createdAt:1000,
//         note:'this is better'
//     }
//     store.dispatch(startAddExpense(expenseData)).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type:'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseData
//             }
//         })
//         return database.ref(`expenses/${actions[0].expenses.id}`).once('value');.then((snapshot) => {
//             expect(snapshot.val()).toEqual(expenseData);
//             done();
//         });

//     });
//  })
test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
      description: 'Mouse',
      amount: 3000,
      note: 'This one is better',
      createdAt: 1000
    };
  
    store.dispatch(startAddExpense(expenseData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
  
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
  });

 test('should add expensewith defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDeafault = {
        description: '', 
        note:'', 
        amount: 0, 
        createdAt:0  
    };
  
    store.dispatch(startAddExpense({})).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDeafault
        }
      });
  
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDeafault);
      done();
    });
  });
//  test ('should set up edit expense action object in default', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//         id: expect.any(String),
//         description: '',
//         note: '',
//         amount:0,
//         createdAt:0
//         }
//     })
//  });

