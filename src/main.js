import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
//引入仓库
import store from '@/store'
//引入API
import * as API from '@/api'
//引入全局组件
import Carousel from '@/components/Carousel'
import LatestPosts from '@/components/LatestPosts'
import Instagram from '@/components/Instagram'
import Categories from '@/components/Categories'
import Tags from '@/components/Tags'
import Pagination from '@/components/Pagination'
import ElCarouselLBT from '@/components/ElCarouselLBT'


//瀑布流布局
import Masonry from '@/components/Masonry'
//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入vue-touch
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'});

//注册全局组件
Vue.component(Carousel.name, Carousel);
Vue.component(ElCarouselLBT.name, ElCarouselLBT);
Vue.component(LatestPosts.name, LatestPosts);
Vue.component(Instagram.name, Instagram);
Vue.component(Categories.name, Categories);
Vue.component(Tags.name, Tags);
Vue.component(Pagination.name, Pagination);
Vue.component(Masonry.name, Masonry);

//mock模拟数据
import '@/mock'
//引入swiper样式-----Carousel
import 'swiper/css/swiper.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; //定义全局事件总线
    Vue.prototype.$API = API;  //定义全局API
  },
  router,
  store,
}).$mount('#app')
