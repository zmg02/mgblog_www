import Mock from './mock'
import request from '@/utils/request'

// export const getBannerList = () => Mock.get('/home/banner');
export const getBannerList = () => request({ url: '/v1/banners', method: 'get' });

// export default {
//     bannerList() {
//         return Mock.get('/home/banner');
//     },
//     articleList() {
//         return Mock.get('/home/article');
//     },
// }