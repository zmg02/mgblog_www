import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { config } from 'vue-touch'
//引入进度条 start方法：进度条开始 done方法：进度条结束
import nprogress from 'nprogress'
//引入进度条相应样式
import "nprogress/nprogress.css"


const service = axios.create({
    baseURL: '/api',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        //进度条开始
        nprogress.start();
        if (store.getters.token) {
            config.headers['Authorization'] = 'Bearer ' + getToken()
        }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        //进度条结束
        nprogress.done();
        const res = response.data
        if (res.code !== 200) {
            Message({
                message: res.message || 'Response Error',
                type: 'error',
                duration: 5 * 1000
            })

            return Promise.reject(new Error(res.message || 'Response Error'))
        } else {
            return res
        }
    },
    error => {
        console.log(error);
        Message({
            message: error.message,
            type: 'error',
            duration: 5*1000
        })
        return Promise.reject(error)
    }
)

export default service