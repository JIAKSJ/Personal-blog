import axios from "axios";
import config from "../config/index"

    //创建实例
    const sever = axios.create({
        baseURL: config.baseURL,
        timeout: 2000,
    });


    // 添加请求拦截器
    sever.interceptors.request.use(config => {
        // 在发送请求之前做些什么
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    sever.interceptors.response.use(response => {
      
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response.data;
    }, function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
    });

    function request(options) {
        console.log("当前环境" + config.env)
        options.method = options.method || 'get'
        if (options.method.toLowerCase() == 'get') {
            options.params = options.data
        }
        let isMock = confirm.ismock
    
        if (typeof options.mock !== 'undefined') {
            isMock = options.mock
        }
    
        if (config.env == 'prod') {
            sever.defaults.baseURL = (config.baseURL)
        }
        else {
            sever.defaults.baseURL = isMock ? config.mockApi : config.baseApi
        }
       return sever(options)
}

export default request


