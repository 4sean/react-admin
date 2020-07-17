import service from '../utils/request';

/* 验证登陆 */
export function Login(data) {
  return service.post('/login/',data)
}