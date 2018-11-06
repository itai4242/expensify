import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should test default state', () => {
    const state = expensesReducer(undefined, {type: '0@@init'})
    expect(state).toEqual([]);
})
test ('should remove expenses by id', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id : expenses[1].id
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0], expenses[2]])
})
test ('should not remove expenses if id not found', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id : '-1'
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
})
test ('should add expenses', () => {
    const expense = {
        id : '109', 
        description : 'trbtt', 
        note: '', 
        amount: 500, 
        createdAt: 0 
    }
    const action = {
        type:'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
})
test ('should edit expense by id', () => {
    const amount = 12200;
    const action = {
        type:'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{amount}
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
})
test ('should not edit expense by false id', () => {
    const amount = 12200;
    const action = {
        type:'EDIT_EXPENSE',
        id: '-1',
        updates:{amount}
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})