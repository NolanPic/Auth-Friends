import axios from 'axios';

export const baseURL = 'http://localhost:5000/api';

const axiosWithAuth = () => {
    return axios.create({
        baseURL,
        headers: { Authorization: localStorage.getItem('token') }
    });
};

export default axiosWithAuth;
