import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history', // 需要服务端支持
    routes,
    //滚动行为
    scrollBehavior: () => ({ y: 0 }),

});

router.beforeEach((to, from, next) => {
    next();
});

export default router;
