import HomePage from "./components/HomePage/HomePage";
import PageTwo from "./components/PageTwo/PageTwo";
import axios from "axios";
import {fakeServer} from "./utils/FakeServer";

export const PAGES_NAMES = {
    PAGE_1: "TableGeneration",
    PAGE_2: "VisualStatistics"
};

export const config = {
    url: "http://192.168.6.236:8000/",
    pages: [
        {
            name: "Генерация таблицы",
            path: `/`,
            Component: HomePage,
        },
        {
            name: "Визуальная статистика",
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
        }, 3000);
    })
};
