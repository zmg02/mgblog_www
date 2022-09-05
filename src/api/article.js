import request from '@/utils/request'

// 文章列表
export const reqGetArticles = (params) => request({ url: '/v1/articles', params, method: 'get' });
// 文章详情
export const reqGetArticleInfo = (id) => request({ url: `/v1/articles/${id}`, method: 'get' });
