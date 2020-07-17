import axios from 'axios';

//创建实例
const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})

//请求拦截
// http request 拦截器
instance.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('token')
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = token  //请求头加上token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

//响应拦截
// http response 拦截器
instance.interceptors.response.use(
  response => {
    //拦截响应，做统一处理 
    // if (response.data.code) {
    //   switch (response.data.code) {
    //     case 1002:
    //       store.state.isLogin = false
    //       router.replace({
    //         path: 'login',
    //         query: {
    //           redirect: router.currentRoute.fullPath
    //         }
    //       })
    //   }
    // }
    return response
  },
  //接口错误状态处理，也就是说无响应时的处理
  error => {
    return Promise.reject(error.response.status) // 返回接口返回的错误信息
  }
)

instance.get = (url, params) => instance.request({
  url,
  method: 'GET',
  params
});
instance.post = (url, data) => instance.request({
  url,
  method: 'post',
  data,

});

export default instance
