/**
 * LINE 相關初使化
 * @param {any} liffId
 */
function init(liffId) {
    liff?.init({
        liffId
    }).then(() => {
        document.getElementById('lineLoginButton').addEventListener('click', function () {
            lineLogin();
        });
    });
}

/**
 * 登入 LINE 帳號
 * @returns
 */
function lineLogin() {
    if (!liff.isLoggedIn()) {
        console.log('使用者未登入');
        return liff.login();
    }

    return getProfile();
}

/**
 * 取得 LINE Server 回傳的相關資訊
 */
function getProfile() {
    liff.getProfile().then(profile => {
        const { userId, displayName } = profile;
        console.log('使用者: ', userId, displayName);
        return linee({ lineId: userId, displayName: displayName });
    });
}

/**
 * 查詢 LINE 使用者成員資訊
 * @param {any} body
 * @returns
 */
function linee(body) {
    return fetchToJson('/api/lineee', 'post', body)
        .then(data => login({ username: data.username, line: true }));
}

/**
 * 登入 LINE 後查詢該成員項目並暫存起來
 * @param {any} body
 * @returns
 */
function login(body) {
    return fetchToJson('/api/login', 'post', body)
        .then(data => {
            storageMember(data);
            window.location = 'https://light.go-free.tw/golight.html';
        });
}

/**
 * 
 * @param {any} url
 * @param {any} method
 * @param {any} body
 * @returns
 */
function fetchToJson(url, method, body) {
    return new Promise(resolve => {
        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(x => resolve(x.json()));
    });
}

/**
 * 
 * @param {any} data
 */
function storageMember(data) {
    const member = localStorage.getItem('data');
    const json = JSON.parse(member);

    json.token = data.token;
    localStorage.setItem('data', JSON.stringify(json));
}

/**
 * 執行 LINE 登入
 */
(function (liffId) {
    init(liffId);
})('2004258463-5P6lPeYA');