import { createStore, bindActionCreators } from 'redux';

const inceremntCount = ({incrementBy=1}={}) => ({
    type : 'INCREMENT',
    incrementBy
})
const decrementCount = ({decrementBy=1}={}) => ({
    type : 'DESCREMENT',
    decrementBy
})
const setCount = ({count=0}={}) =>({
    type:'SET',
    count
})
const resetCount = () =>({
    type:'RESET'
})
const countReducer = (state = { count : 0}, action) => {
    
    switch (action.type) {
        case 'INCREMENT':
        {         
            return {
                count:state.count+action.incrementBy
            };
        }
        case 'DESCREMENT':
        {
            return {
                count:state.count-action.decrementBy
            };
        }
        case 'SET':
            return {
                count:action.count
            }
        case 'RESET':
            return {
                count:state.count=0
            }
    }
    return state;
}
const store = createStore(countReducer);

const unsubscribe = store.subscribe (() => {
    console.log(store.getState());
});
store.dispatch(inceremntCount({incrementBy:5}))

store.dispatch(inceremntCount())

store.dispatch(resetCount())

store.dispatch(decrementCount({decrementBy:10}))
store.dispatch(decrementCount())
store.dispatch(setCount({count:101}))
store.dispatch(resetCount())
