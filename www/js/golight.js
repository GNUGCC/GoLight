/**
 * 
 * @param {any} body
 * @returns
 */
function linee(body) {
    return performanceJson(fetch('/api/lineee', performance('post', 'application/json', body)));
}

/**
 * 
 * @param {any} body
 * @returns
 */
function login(body) {
    return performanceJson(fetch('/api/login', performance('post', 'application/json', body)));
}

/**
 * 
 * @param {any} body
 * @returns
 */
function line_record_list(body) {
    return performanceJson(fetch('/api/light-record-list', performance('post', 'application/json', body)));
}

/**
 * 
 * @param {any} method
 * @param {any} headers
 * @param {any} body
 * @returns
 */
function performance(method, headers, body) {
    return {
        method,
        headers,
        body
    };
}

/**
 * 
 * @param {any} promise
 * @returns
 */
function performanceJson(promise) {
    return new Promise(x => promise.then(response => x(response.json())));
}

(function () {
    liff?.init({
        liffId: "2004258463-5P6lPeYA"
    }).then(() => {
        document.getElementById('lineLoginButton').addEventListener('click', function () {
            if (!liff.isLoggedIn()) {
                console.log('使用者未登入');
                liff.login();
            } else {
                liff.getProfile().then(profile => {
                    const { userId, displayName } = profile;
                    console.log('使用者: ', userId, displayName);

                    return;
                    linee({ lineId: userId, displayName: displayName })                   
                        .then(data => {
                            if (data.success) {
                                login({ username: data.username, line: true })
                                    .then(data => {
                                        console.log('123', data)
                                        if (data.success) {
                                            const token = data.token;
                                            line_record_list({})
                                                .then(data => {
                                                    if (data.success) {
                                                        const data = localStorage.getItem("data");
                                                        const json = JSON.parse(data);
                                                        json.token = token;
                                                        localStorage.setItem('data', JSON.stringify(json));
                                                        window.location = 'https://light.go-free.tw/golight.html';
                                                    } else {
                                                        alert('登入失敗，請稍後再試');
                                                    }
                                                });
                                        } else {
                                            alert('登入失敗，請稍後再試');
                                        }
                                    });
                            }
                            else {

                            }
                        });
                });
            }
        });
    });
})();