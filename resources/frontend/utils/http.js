import axios from "axios";
import Vue from "vue";

const instance = axios.create({
    baseURL: "http://127.0.0.1",
    timeout: 4000,
});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (response) => {
        return response.data.data;
    },
    (error) => {
        const { response, code, message } = error || {};
        const msge = response?.data?.message ?? "";

        Vue.$message.error(msge)
        return Promise.reject(error);
    },
);

export function get(url, params = {}, options = {}) {
    return instance.get(url, {
        params,
        ...options,
    });
}

export function post(url, params = {}, options = {}) {
    return instance.post(url, params, options);
}

export function put(url, params = {}, options = {}) {
    return instance.put(url, params, options);
}

export function destroy(url, options = {}) {
    return instance.delete(url, options);
}
