import request from '@/utils/request'

// 文章列表
export const reqGetArticles = (params) => request({ url: '/v1/articles', params, method: 'get' });
// 文章详情
export const reqGetArticleInfo = (id) => request({ url: `/v1/articles/${id}`, method: 'get' });
// 上一篇文章详情
export const reqGetPrevArticleInfo = (id) => request({ url: `/v1/articles/prev_article/${id}`, method: 'get' });
// 下一篇文章详情
export const reqGetNextArticleInfo = (id) => request({ url: `/v1/articles/next_article/${id}`, method: 'get' });
