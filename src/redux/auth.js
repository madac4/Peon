import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token'),
        isAuth: null,
        loading: true,
        user: null,
    },
    reducers: {
        registerSuccess: (state, action) => {
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                loading: false,
            };
        },
        registerFail: (state) => {
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false,
            };
        }
    }
})

export const { registerSuccess, registerFail } = authSlice.actions
export default authSlice.reducer;