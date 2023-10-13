import R from "@/service/data/R";
import { baseUrl, timeout, headers } from "./constants";
import axios from "axios";

const sigletonAxios = axios.create({
    baseURL: baseUrl,
    timeout: timeout,
    headers: headers
});

// 添加请求拦截器
sigletonAxios.interceptors.request.use(
    (config) => {
        // 在请求发送前添加 token 或其他头信息
        if (localStorage.getItem("jwt")) {
            config.headers.Authorization = `Bearer ${localStorage.getItem("jwt")}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 添加响应拦截器
sigletonAxios.interceptors.response.use(
    (response) => {
        // 在收到响应后可以进行一些处理
        console.log("响应拦截器", response);
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export function get<T>(url: string): Promise<R<T>> {
    return new Promise((resolve, reject) => {
        sigletonAxios.get(url).then(res => {
            if (res.status === 200) {
                resolve(R.success(res.data));
            } else {
                reject(R.error(res.data, res.status));
            }
        }).catch(error => {
            reject(R.error(error.message, error.status));
        })
    })
}

export function post<T>(url: string, data?: any): Promise<R<T>> {
    return new Promise((resolve, reject) => {
        sigletonAxios.post(url, data).then(res => {

            if (res.status === 200) {
                resolve(R.success(res.data));
            } else {
                reject(R.error(res.data, res.status));
            }
        }).catch(error => {
            reject(R.error(error.message, error.status));
        })
    })
}
