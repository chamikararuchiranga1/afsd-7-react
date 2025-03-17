import axios from "axios";

const instance = axios.create({
    baseURL: 'https://student-api.acpt.lk/api',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

export default instance;