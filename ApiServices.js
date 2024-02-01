const api_url = "";
const isDebug = import.meta.env.VITE_DEBUG === 'true';
console.log("find data", import.meta.env.VITE_APP_URL,isDebug)

import axios from "axios";
axios.interceptors.request.use(
    function (config) {
        config.headers = {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
            Accept: "application/json",
            'SameSite': 'None',
            'Secure': true
        };
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        // console.log("Post request error:", error);
        return Promise.reject(error);
    }
);
export default {
    loginUser(obj) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${api_url}/login`, obj)
                .then((response) => {
                    if (response.request.status === 200) {
                        resolve(response);
                    } else {
                        reject({ message: 'Unexpected response status', response });
                    }
                })
                .catch((error) => {
                    if (error.response && error.response.status === 401) {
                        reject({ message: 'Authentication failed. Please check your credentials.', response: error.response });
                    } else {
                        reject(error);
                    }
                });
        })
        .catch((error) => {
            return error.response;
        });
    },
    register(obj) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${api_url}/register`, obj)
                .then((response) => {
                    if (response.request.status === 200) {
                        resolve(response.data);
                    } else {
                        reject({ message: 'Unexpected response status', response });
                    }
                })
                .catch((error) => {
                    if (error.response && error.response.status === 401) {
                        reject({ message: 'Authentication failed. Please check your credentials.', response: error.response });
                    } else {
                        reject(error);
                    }
                });
        })
        .catch((error) => {
            return error.response;
        });
    },
    getAllProperties() {
        return new Promise((resolve, reject) => {
            axios
                .get(`http://54.82.47.83.nip.io:5000/api/customer/fetchAllProperties`)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    getPropertyImage(path) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${api_url}/property/accessPropertyImages/${path}`)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
}