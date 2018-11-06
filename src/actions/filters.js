//set text filter
export const setTextFilter = (text = '') => ({
    type : 'SET_TEXT_FILTER',
    text    
})
// sort by amount or date
export const sortByAmount = () =>({
    type:'SORT_BY',
    sort: 'amount'
})
export const sortByDate = () => ({
    type:'SORT_BY',
    sort: 'date'
})
//set start
export const setStartDate = (date = undefined) => ({
    type:'SET_START_DATE',
    date
})
export const setEndDate = (date = undefined) => ({
    type:'SET_END_DATE',
    date
})