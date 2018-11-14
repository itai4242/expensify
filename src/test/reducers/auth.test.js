import authReducer from '../../reducers/auth'

test('should test default state', () => {
    const state = authReducer(undefined, {type: '0@@init'})
    expect(state).toEqual({});
})

test('should test login', () => {
    const action = {
        type:'LOGIN',
        uid: 'birvrvorv'
    }
    const state = authReducer({}, action)
    expect(state.uid).toBe(action.uid);
})
test('should test logout', () => {
    const action = {
        type:'LOGOUT',
    }
    const state = authReducer({uid:'anything'}, action)
    expect(state).toEqual({});
})