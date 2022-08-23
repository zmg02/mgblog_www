import Mock from './mock'

export const getBannerList = () => Mock.get('/home/banner');

// export default {
//     bannerList() {
//         return Mock.get('/home/banner');
//     },
//     articleList() {
//         return Mock.get('/home/article');
//     },
// }