import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//add expanse
const addExpense = (
    { 
        description = '', 
        note ='', 
        amount = 0, 
        createdAt=0 
    }= {}
    ) => ({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
// remove expense
const removeExpense = ({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
})
// edit expense
const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
//set text filter
const setTextFilter = (text = '') => ({
    type : 'SET_TEXT_FILTER',
    text    
})
// sort by amount or date
const sortByAmount = () =>({
    type:'SORT_BY',
    sort: 'amount'
})
const sortByDate = () => ({
    type:'SORT_BY',
    sort: 'date'
})
//set start
const setStartDate = (date = undefined) => ({
    type:'SET_START_DATE',
    date
})
const setEndDate = (date = undefined) => ({
    type:'SET_END_DATE',
    date
})
const expenseReducerDefaultState = [];
const expenseReducer= (state = expenseReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id!==action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id===action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else{
                    return expense;
                }
            });
        default:
            return state;
    }
}

const filtersReducerDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
         return {...state, text:action.text};
        case 'SORT_BY':
         return {...state, sortBy:action.sort};
        case 'SET_START_DATE':
         return {...state, startDate:action.date};
         case 'SET_END_DATE':
         return {...state, endDate:action.date};
        default:
            return state;
    }
}

const getVisibileExpense = (expenses, {text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text !=='string' || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy==='date')
            return a.createdAt < b.createdAt? 1 : -1;
        if (sortBy==='amount')
            return a.amount < b.amount? 1 : -1;
    })
}
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState()
    const visibileExpense = getVisibileExpense(state.expenses, state.filters)
    console.log(visibileExpense);
});

const expenseOne = store.dispatch(addExpense({description:'Rent', amount: 10000, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description:'coffe', amount: 5000, createdAt: -1000}));
// store.dispatch(removeExpense({ id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
// store.dispatch(setTextFilter('fee'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(800));
// const user = {
//     name:'Jen',
//     age:24
// }
// console.log({...user, location:'israel', age:27});

// const demoState = {
//     expenses: [{
//         id: 'vbignvotb',
//         description: 'January Rent',
//         note: 'This is last payment',
//         amount:54500,
//         createdAt: 0
//     }],
//     filters:{
//         text:'rent',
//         sortBy: 'amount',//amount or date
//         startDate: undefined,
//         endDate: undefined
//     }
// };