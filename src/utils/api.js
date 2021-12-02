import axios from 'axios';
import {config} from "../config";

const instance = axios.create({
    baseURL: config.url,
});

export const API = {
    test: () => instance.get("test").then(res => res.data),
};