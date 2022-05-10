import axios from 'axios';

// const BASE_URL = 'http://localhost:8000/api';
const BASE_URL = 'https://react-wild.herokuapp.com/api/';
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGU1NjFmNjAwM2JmYzM0NmQ4YjU5OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjYwMDIwOCwiZXhwIjoxNjQ2ODU5NDA4fQ.TJe6eBpAJhOkE55R6CXzvuxw4cnpo51yfR8EjLrZmZM";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
})