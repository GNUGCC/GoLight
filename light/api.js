/*jslint name,node*/

const _axios = require("axios");
const {isPlatform, loadingController} = require("@ionic/vue");
const {Http} = require("@capacitor-community/http");
const {Network} = require("@capacitor/network");

let baseUrl = "https://light.go-free.tw";
let axios = _axios.create({
    baseURL: baseUrl,
    withCredentials: true,
})


let mapping = {
    "address": "地址",
    "birthday": "生日",
    "gender": "性別",
    "name": "姓名",
    "password": "密碼",
    "username": "電話"
};

let running;

async function post(path, params, callback, silence) {
    if (silence) {
        return silence_post(path, params, callback);
    }

    let status = await Network.getStatus();

    if (!status.connected) {
        alert("網路未連線");
        return;
    }

    if (running) {
        return;
    }

    running = true;

    let handle = function (response) {
        let result = response.data;

        if (result.success) {
            if (callback) {
                callback(result);
            }
        } else {
            if (result.type === "validation") {
                let error = result.errors[0];
                let name = mapping[error.name] || error.name;

                alert(`${name}: ${error.message}`);
            } else {
                alert(result.message || result.error);
            }
        }
    };

    let loading = await loadingController.create();

    await loading.present();

    let request;
    if (isPlatform("desktop")) {
        request = axios.post(path, params).then(handle).catch(function (error) {
            if (error.response && error.response.status === 401) {
                alert("LoginForm");
            } else {
                alert(error.message);
            }
        });
    } else {
        request = Http.post({
            data: params,
            headers: {"Content-type": "application/json"},
            url: baseUrl + path
        }).then(function (response) {
            switch (response.status) {
            case 200:
                handle(response);
                break;
            case 401:
                alert("LoginForm");
                break;
            default:
                alert(response.status);
            }
        }).catch(function () {
            alert("網路連線失敗");
        });
    }

    return request.then(function () {
        running = false;
        loading.dismiss();
    });
}

async function silence_post(path, params, callback) {
    let status = await Network.getStatus();

    if (!status.connected) {
        return;
    }

    let handle = function (response) {
        let result = response.data;

        if (result.success) {
            if (callback) {
                callback(result);
            }
        }
    };

    let request;

    if (isPlatform("desktop")) {
        request = axios.post(path, params).then(handle);
    } else {
        request = Http.post({
            data: params,
            headers: {"Content-type": "application/json"},
            url: baseUrl + path
        }).then(function (response) {
            switch (response.status) {
            case 200:
                handle(response);
                break;
            }
        });
    }

    return request;
}

function applyForgot(data, callback) {
    post("/api/apply-forgot", data, callback);
}

function applyRegister(data, callback) {
    post("/api/apply-register", data, callback);
}

function createOrder(data, callback) {
    post("/api/create-order", data, callback);
}

function executePayment(id, callback) {
    return post("/api/execute-payment", {id}, callback);
}

function forgotSms(data, callback) {
    post("/api/forgot-sms", data, callback);
}

function login(data, callback) {
    post("/api/login", data, callback);
}

function logout(callback) {
    post("/api/logout", {}, callback);
}

function queryAttraction(id, callback) {
    return post("/api/get-attraction", {id}, callback);
}

function queryAttractionList(temple_id, callback) {
    return post("/api/attraction-list", {temple_id}, callback);
}

function queryFamily(id, callback) {
    return post("/api/get-family", {id}, callback);
}

function queryFamilyList(callback) {
    return post("/api/family-list", {}, callback);
}

function queryInfo(callback) {
    post("/api/get-info", {}, callback);
}

function queryLightList(temple_id, callback) {
    return post("/api/light-list", {temple_id}, callback);
}

function queryLightRecordList(callback) {
    return post("/api/light-record-list", {}, callback);
}

function queryLocationInfo(callback) {
    return post("/api/location-info", {}, callback);
}

function queryNews(id, callback) {
    return post("/api/get-news", {id}, callback);
}

function queryNewsList(temple_id, callback) {
    return post("/api/news-list", {temple_id}, callback);
}

function queryOrder(id, callback) {
    post("/api/get-order", {id}, callback);
}

function queryOrderItem(id, callback) {
    post("/api/get-order-item", {id}, callback);
}

function queryOrderList(callback) {
    post("/api/order-list", {}, callback);
}

function queryTemple(id, callback) {
    return post("/api/get-temple", {id}, callback);
}

function queryTempleList(data, callback, silence) {
    return post("/api/temple-list", data, callback, silence);
}

function registerSms(data, callback) {
    post("/api/register-sms", data, callback);
}

function removeFamily(id, callback) {
    return post("/api/remove-family", {id}, callback);
}

function reportLocation(data) {
    return post("/api/report-location", data, false, true);
}

function saveFamily(data, callback) {
    post("/api/save-family", data, callback);
}

function saveInfo(data, callback) {
    post("/api/save-info", data, callback);
}

function searchLight(data, callback) {
    post("/api/search-light", data, callback);
}

function verifyCoupon(code, callback) {
    post("/api/verify-coupon", {code}, callback);
}

function verifyForgot(data, callback) {
    post("/api/verify-forgot", data, callback);
}

function verifyRegister(data, callback) {
    post("/api/verify-register", data, callback);
}

function passpay(data, callback) {
    post("/payment/passpay", data, callback);
}

function getImgSrc(s) {
    let imgUrl = ''
    if(s.indexOf('base64') !== -1) {
        imgUrl = s;
    } else {
        imgUrl = baseUrl + '/files/' + s;
    }
    return imgUrl;
}

module.exports = {
    applyForgot,
    applyRegister,
    baseUrl,
    createOrder,
    executePayment,
    forgotSms,
    login,
    logout,
    queryAttraction,
    queryAttractionList,
    queryFamily,
    queryFamilyList,
    queryInfo,
    queryLightList,
    queryLightRecordList,
    queryLocationInfo,
    queryNews,
    queryNewsList,
    queryOrder,
    queryOrderItem,
    queryOrderList,
    queryTemple,
    queryTempleList,
    registerSms,
    removeFamily,
    reportLocation,
    saveFamily,
    saveInfo,
    searchLight,
    verifyCoupon,
    verifyForgot,
    verifyRegister,
    getImgSrc,
    passpay,
};
