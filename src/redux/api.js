import { registerFail, registerSuccess } from "./auth"
import { publicRequest } from "../requestMethod";

export const registerUser = (username, email, password) => async (dispatch) => {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        },
    };
    const body = JSON.stringify({username, email, password})
    try {
        const res = await publicRequest.post('/auth/register', body, config);
        // const res = await publicRequest.post('/auth/register', config);
        dispatch(registerSuccess(res.data));
        console.log('yes');
    } catch (error) {
        console.log(error);
        console.log('no');
        dispatch(registerFail())
    }
}

// export const login = async (dispatch, user) => {
//     dispatch(loginStart());
//     try {
//         const res = await publicRequest.post('/auth/login', user);
//         dispatch(loginSuccess(res.data));
//     } catch (error) {
//         dispatch(loginFailure());
//     }
// }