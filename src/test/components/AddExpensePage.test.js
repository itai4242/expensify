import React from 'react'
import {shallow} from 'enzyme';
import {ADDExpensePage} from '../../components/ADDExpensePage'
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper;
beforeEach( () => {
    addExpense= jest.fn();
    history = { push: jest.fn() };
    wrapper =  shallow(<ADDExpensePage addExpense={addExpense} history = {history} exp />);
})

test ('should render ADDExpensePage correctly',() => {
    expect(wrapper).toMatchSnapshot();
})

test ('should handle onsubmit',() => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})