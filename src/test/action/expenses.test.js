import {ddExpense, removeExpense, editExpense, addExpense} from '../../actions/expenses'

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
test ('should set up edit expense action object', () => {
    const expenseData = {
        description: 'abcd',
        note: 'vtkvn5kbnktb', 
        amount: 58, 
        createdAt: 1000000 
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        ...expenseData,
        id: expect.any(String)
        }
    })
 });
 test ('should set up edit expense action object in default', () => {
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        id: expect.any(String),
        description: '',
        note: '',
        amount:0,
        createdAt:0
        }
    })
 });

