import axios from 'axios';
import jwtDecode from 'jwt-decode';

// const BASE_URL = 'https://localhost:7250';

//const BASE_URL = "http://13.210.56.232";

const BASE_URL = 'https://linhchidoi.azurewebsites.net';

const axiosPublic = axios.create({
    baseURL: BASE_URL,
});

const loginInfo = localStorage.getItem('loginInfo') ? JSON.parse(localStorage.getItem('loginInfo')) : null;

const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${loginInfo?.accessToken}`,
    },
});

axiosPrivate.interceptors.request.use(async (req) => {
    if (!loginInfo) {
        // eslint-disable-next-line no-const-assign
        loginInfo = localStorage.getItem('loginInfo') ? JSON.parse(localStorage.getItem('loginInfo')) : null;
        req.headers.Authorization = `Bearer ${loginInfo?.accessToken}`;
    } else {
        req.headers.Authorization = `Bearer ${loginInfo?.accessToken}`;
    }

    const user = jwtDecode(loginInfo.accessToken);
    let date = new Date();

    // Check if the token is expired
    const isExpired = user.exp < date.getTime() / 1000;
    const params = {
        accessToken: loginInfo.accessToken,
        refreshToken: loginInfo.refreshToken,
        expires: loginInfo.expires,
    };

    if (!isExpired) {
        return req;
    } else {
        console.log(req);

        const response = await axios.post(`${BASE_URL}/api/v1/auth/RenewToken`, params);

        localStorage.setItem('loginInfo', JSON.stringify(response.data));

        req.headers.Authorization = `Bearer ${response.data.accessToken}`;

        // Return the updated request
        return req;
    }
});

export { axiosPrivate, axiosPublic };
