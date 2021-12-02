const axios = require('axios').create({
    baseURL: "http://192.168.6.236:8000/",
});

const selectorSubstr = "product-header__title app-header__title\">";

const API = {
    test: (id) => axios.get(`https://apps.apple.com/us/app/apple-business-essentials/id${id}`).then(res => res.data),
};

const get = async (id) => {
    const data = await API.test(id);
    let i = data.indexOf(selectorSubstr) + selectorSubstr.length;
    let appName = "";
    while (data[i] !== "<") {
        if (data[i] === " " || data[i] === "\n")  {
            i++;
            continue;
        }
        appName += data[i++];
    }
    console.log(appName);
};

get(process.argv[2]);