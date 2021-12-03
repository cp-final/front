import HomePage from "./components/HomePage/HomePage";
import PageTwo from "./components/PageTwo/PageTwo";
import axios from "axios";
import {fakeServer} from "./utils/FakeServer";

export const PAGES_NAMES = {
    PAGE_1: "PAGE_1",
    PAGE_2: "PAGE_2"
};

export const config = {
    url: "http://192.168.6.236:8000/",
    pages: [
        {
            name: PAGES_NAMES.PAGE_1,
            path: `/`,
            Component: HomePage,
        },
        {
            name: PAGES_NAMES.PAGE_2,
            path: `/${PAGES_NAMES.PAGE_2}`,
            Component: PageTwo,
        }
    ]
};

const instance = axios.create({
    baseURL: config.url,
});

export const API = {
    test: () => instance.get("test").then(res => res.data),
    getTableData: (portion) => new Promise((res, rej) => {
        const data = fakeServer.getTableData(portion);
        setTimeout(() => {
            res(data);
        }, 1000);
    }),
    getNewTableData: () => new Promise((res, rej) => {
        const data = fakeServer.getNewTableData();
        setTimeout(() => {
            res(data);
        }, 1000);
    })
};
