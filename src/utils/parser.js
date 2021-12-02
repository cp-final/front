const axios = require('axios').create({
    baseURL: "http://192.168.6.236:8000/",
});

const selectorSubstr = "product-header__title app-header__title\">";

const API = {
    test: (id) => axios.get(`https://apps.apple.com/us/app/apple-business-essentials/id${id}`).then(res => res.data),
};

const get = async (id) => {
    let data;
    try {
        data = await API.test(id);
    } catch (e) {
        console.log(`${id},null`);
        return;
    }
    let i = data.indexOf(selectorSubstr) + selectorSubstr.length;
    let appName = "";
    let isParsingName = false;

    while (data[i] !== "<") {
        if ((data[i] === " " && !isParsingName) || data[i] === "\n")  {
            i++;
            continue;
        }

        appName += data[i++];
    }

    console.log(`${id},${appName}`);
};

get(process.argv[2]);