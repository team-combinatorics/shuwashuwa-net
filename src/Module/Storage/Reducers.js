//
// Reducers.js
// shuwashuwa-net
//
// created by Hirate99 on 2021/12/14
//

const initialLoginState = {
    hasLogin: false,
}

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const loginAction = {
    'type': LOGIN,
    'token': String,
}

export const logoutAction = {
    'type': LOGOUT,
}

export const loginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case LOGIN: {
            return { hasLogin: true, token: action.token }
        }
        case LOGOUT:
            return { hasLogin: false, token: null }
        default:
            return state
    }
}

export const loginActionCreator = (token): loginAction => {
    return {
        'type': LOGIN,
        'token': token,
    }
}