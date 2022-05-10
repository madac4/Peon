import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        isAuth: null,
        loading: false,
        user: null,
    },
    reducers: {
        registerSuccess: (state, action) => {
            return {
                ...state,
                ...action.payload,
                token: action.payload.token,
                isAuth: true,
                loading: false,
            };
        },
        registerFail: (state) => {
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false,
            };
        },
        userLoaded: (state, action) => {
            return {
                ...state,
                user: action.payload,
                isAuth: true,
                loading: false,
            };
        },
        authError: (state) => {
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false,
            };
        },
        logout: (state) =>{
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false,
            };
        },
        setLoading: (state) =>{
            return {
                ...state,
                loading: true
            }
        },
        loginSuccess: (state, action) =>{
            return {
                ...state,
                ...action.payload,
                token: action.payload.token,
                isAuth: true,
                loading: false,
            };
        },
        loginFail: (state) =>{
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false,
            };
        },
    }
})

export const { 
    registerSuccess, 
    registerFail, 
    userLoaded, 
    authError, 
    logout, 
    setLoading,
    loginSuccess,
    loginFail} = authSlice.actions
export default authSlice.reducer;