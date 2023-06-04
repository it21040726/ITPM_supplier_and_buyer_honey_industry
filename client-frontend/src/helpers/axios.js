import axios from 'axios'
import { api } from '../urlConfigs'

const axiosInstance = axios.create({
    baseURL: api
})

axiosInstance.interceptors.response.use((res) => {
    return res
}, (error) => {
    console.log(error.response)
    return Promise.reject(error)
})

export default axiosInstance