import request from '@/utils/request'

// 文章列表
export const reqGetArticles = (params) => request({ url: '/v1/articles', params, method: 'get' });
