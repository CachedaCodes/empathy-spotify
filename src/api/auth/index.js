import request from "./request";

const authToken = 'BQDTY92q1jIN3b20ArdgGQKc7aeVe1q0A9WhteCzLDo4yyrtO7JmlpZZjT_BHNSFU9_zVKIXI0oKFX5jyCG41qEaK6DGpOG6YSt3eSjfLm9Bmf-gSvsKMaP68NHc3hUAp9fMEtQ';

export default {
    authToken,
    getUserAuthURL: function() {
        return request.get('login');
    }
};