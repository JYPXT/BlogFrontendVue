import axios from 'axios'

// const instance = axios.create({
//     baseURL: process.env.apiUrl,
//     timeout: 5000,
//     headers: {'X-Requested-With': 'XMLHttpRequest'}
// });

// 超时时间
axios.defaults.timeout = 5000;
axios.defaults.headers = {'X-Requested-With': 'XMLHttpRequest'};
// http请求拦截器
axios.interceptors.request.use(config => {
 // config.headers = {'X-Requested-With': 'XMLHttpRequest'};
 return config
}, error => {
 return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(response => {
    const { data } = response;
    if (data.status === 'success') {
        return response.data
    } else {
        console.log(data.message);
        return Promise.reject(data.message)
    }
}, error => {
 return Promise.reject(error)
})

const install = function (Vue, options) {
    Vue.prototype.axios = axios
    Vue.prototype.baseUrl = process.env.apiUrl
}
 
export default { install }