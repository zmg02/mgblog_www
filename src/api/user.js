import request from '@/utils/request'

// 登录
export const reqLogin = (data) => request({ url: '/v1/login', data, method: 'post' });
// 注册
export const reqRegister = (data) => request({ url: '/v1/register', data, method: 'post' });
