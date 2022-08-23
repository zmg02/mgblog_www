import Vue from 'vue'
import Vuex from 'vuex'
//引入小仓库
import home from './home'
import blog from './blog'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        blog,
    }
})