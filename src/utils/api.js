import axios from 'axios';

const instance = axios.create({
    baseURL: "http://192.168.6.236:8000/",
});

export const API = {
    test: () => instance.get("test").then(res => res.data),
};