
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routes/AppRouter'
import configureStore from './store/configureStore'
import getVisibileExpense from './selectors/expenses'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();

store.dispatch(addExpense({description:'water bill', amount : 700}));
store.dispatch(addExpense({description:'gas bill', createdAt : 10000000000}));
store.dispatch(addExpense({description:'rent', amount : 10950}));

const state = store.getState()
const visibileExpense = getVisibileExpense(state.expenses, state.filters)
console.log(visibileExpense);

const jsx = (
    <Provider store = {store}>
            <AppRouter />
    </Provider>

)
ReactDOM.render(jsx, document.getElementById('app'));