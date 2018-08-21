import * as actions from './actionTypes';
import axios from '../../axios';

export const authStart = () => {
    return {
        type: actions.AUTH_START
    }
}

export const authSuccess = (userId, idToken) => {
    return {
        type: actions.AUTH_SUCCESS,
        token: idToken,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actions.AUTH_FAIL,
        error: error
    }
}

export const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userId');
    return {
        type: actions.AUTH_LOGOUT
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actions.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}
export const checkAuthTimeout = (expiresIn) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout());
        }, expiresIn * 1000)
    }
}

export const authenticateUser = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            username: email,
            password: password,
            scope: 'read write',
            grant_type: 'password'
        };
        
        axios.post('/login', authData)
            .then(response => {
                console.log(response.data);
                const expirationTime = new Date(new Date().getTime() + response.data.expiresIn)
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationTime', expirationTime);
                localStorage.setItem('userId', response.data.localId);
                dispatch(authSuccess(response.data.localId, response.data.idToken));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(error => {
                console.log(error)
                //dispatch(authFail(error.response.data.error));
            })
    }
}

export const checkAuthState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(authLogout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationTime'))
            if (expirationDate <= new Date()) {
                dispatch(authLogout())
            }
            else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(userId, token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}