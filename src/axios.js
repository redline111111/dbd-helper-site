import axios from "axios";

const instance = axios.create({
    baseURL: 'http://45.147.176.68:80',
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
})


export default instance;