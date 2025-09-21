import { getLocalStorageItem } from "@/utils/storage"
import { message } from "antd"
import axios from "axios"

const service = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
    headers: { "Content-Type": "application/json" }
})
//请求拦截器
service.interceptors.request.use(config => {
    // config.headers['token'] = getLocalStorageItem('token')
    return config
},error=> Promise.reject(error))
//响应拦截器
service.interceptors.response.use(response=>{
    return response.data
},error=>{
    message.error(error.response)
    return Promise.reject(error)
})
export default service
