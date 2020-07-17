import service from '../utils/request';

/* 验证登陆 */
export function Login(data) {
  return service.request({
    url:'/login/', 
    method:'post',
    data,
    // method:'GET',
    // params:data
  })
}