import { registerFail, registerSuccess, userLoaded, authError, logout, setLoading, loginSuccess, loginFail } from "./auth"
import { publicRequest, userRequest } from "../helpers/requestMethod";

export const registerUser = (username, email, password) => async (dispatch) => {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        },
    };
    const body = JSON.stringify({username, email, password})
    dispatch(setLoading())
    try {
        const res = await publicRequest.post('/auth/register', body, config);
        dispatch(registerSuccess(res.data));
        dispatch(loadUser())
    } catch (error) {
        console.log(error);
        dispatch(registerFail())
    }
}
export const loginUser = (email, password) => async (dispatch) => {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        },
    };
    const body = JSON.stringify({email, password})
    dispatch(setLoading())
    try {
        const res = await publicRequest.post('/auth/login', body, config);
        dispatch(loginSuccess(res.data));
        dispatch(loadUser())
    } catch (error) {
        console.log(error);
        dispatch(loginFail())
    }
}

export const loadUser = () => async (dispatch) => {
    const localToken = localStorage.getItem('persist:root') && JSON.parse(JSON.parse(localStorage.getItem('persist:root')).auth).token;
    if (localToken) {
        try {
            const res = await userRequest.get('/auth/');
            console.log(res.data);
            dispatch(userLoaded(res.data));
        } catch (error) {
            dispatch(authError());
        }
    }
}

export const logOut = () => async (dispatch) => {
    dispatch(logout());
}