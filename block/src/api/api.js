import request from "../untils/request"


export function weather(params){
  
        return request({
            url: '/api/line',
            method: 'get',
            data: params,
            mock: true
        })
    }

