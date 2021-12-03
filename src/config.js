import HomePage from "./components/HomePage/HomePage";
import PageTwo from "./components/PageTwo/PageTwo";

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
