import axios from 'axios';

// const BASE_URL = 'http://localhost:8000/api';
const BASE_URL = 'https://react-wild.herokuapp.com/api';
let TOKEN = "";
const localToken = localStorage.getItem('persist:root') && JSON.parse(JSON.parse(localStorage.getItem('persist:root')).auth).token;
if (localToken) {
    TOKEN = localToken;
}

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { 'x-auth-token': `${TOKEN}` },
})