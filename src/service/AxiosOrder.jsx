import axios from "axios";

const instance = axios.create({
    baseURL: 'https://student-api.acpt.lk/api',
    // timeout: 1000,
    headers: { 'Authorization': 'Bearer ' + '3356|zqckHM5zWV4V5l6cvXhOr7Mtti0ftfJGxjhCxNsdd3fe4292' }
});

export default instance;