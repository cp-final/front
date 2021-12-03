// import axios from 'axios';
// import {config} from "../config";
// import {fakeServer} from "./FakeServer";
//
// const instance = axios.create({
//     baseURL: config.url,
// });
//
// export const API = {
//     test: () => instance.get("test").then(res => res.data),
//     getTableData: (portion) => new Promise((res, rej) => {
//         const data = fakeServer.getTableData(portion);
//         setTimeout(() => {
//             res(data);
//         }, 1000);
//     }),
// };