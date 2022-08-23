import Mock from 'mockjs'

import HomeBannerList from './home/banner'
import HomeArticleList from './home/article'

//第一个参数请求地址，第二个参数返回数据
Mock.mock('/mock/home/banner', {
    code: 200,
    data: HomeBannerList
});
Mock.mock('/mock/home/article', {
    code: 200,
    data: HomeArticleList
});