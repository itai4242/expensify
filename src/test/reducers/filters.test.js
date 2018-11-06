import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default value by default',() =>{
    const state = filterReducer(undefined, {type: '@@init'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})
// test('should set sortby to amount',() =>{
//     const state = filterReducer(undefined, {type: 'SORT_BY', sort: 'amount'});
//     expect(state).toEqual({
//         text:'',
//         sortBy: 'amount',
//         startDate: moment().startOf('month'),
//         endDate: moment().endOf('month')
//     })
// })
test('should set sortby to amount',() =>{
    const state = filterReducer(undefined, {type: 'SORT_BY', sort: 'amount'});
    expect(state.sortBy).toBe('amount')
})
test('should set sortby to amount',() =>{
    const filtersReducerState = {
        text:'',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = {type:'SORT_BY', sort: 'date'}
    const state = filterReducer(filtersReducerState, action);
    expect(state.sortBy).toBe('date')
})
test('should set text filter',() =>{
    const filtersReducerState = {
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = { type : 'SET_TEXT_FILTER',text: 'hi' }
    const state = filterReducer(filtersReducerState, action);
    expect(state.text).toBe('hi')
})
test('should set Sstart date',() =>{
    const filtersReducerState = {
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = {  type:'SET_START_DATE', date: moment(0) }
    const state = filterReducer(filtersReducerState, action);
    expect(state.startDate).toEqual(moment(0));
})
test('should set end date',() =>{
    const filtersReducerState = {
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = {  type:'SET_END_DATE', date: moment(0) }
    const state = filterReducer(filtersReducerState, action);
    expect(state.endDate).toEqual(moment(0));
})


