/* 环境配置文件

开发环境：dev,
测试环境：test,
生产环境：

*/

const env =import.meta.env.MODE || 'pro'


const EnvConfig={
    development:{
        baseApi:'/apii',
        mockApi:'https://www.fastmock.site/mock/5988467646731a14a0634a973efaaea6'
        
    }
}


const test={
    development:{
        baseApi:'',
        mockApi:''
    }
}

const pro={
    development:{
        baseApi:'',
        mockApi:''
    }
}

export default{
    env,
    mock:true,
    ...EnvConfig[env]
}