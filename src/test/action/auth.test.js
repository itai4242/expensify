import {login,startLogin,logout,startLogout} from '../../actions/auth'

test('should set up login',() => {
    const uid ='4366577'
    const action = login(uid);
    expect(action).toEqual({
        type:'LOGIN',
        uid
    })
})

test('should set up logout',() => {
    const action = logout();
    expect(action).toEqual({
        type:'LOGOUT',
    })
})