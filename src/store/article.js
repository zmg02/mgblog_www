import { reqGetArticles } from "@/api/article"
const actions = {
    async getArticles({ commit }, value) {
        let result = await reqGetArticles(value);
        if (result.code == 200) {
            commit('SET_ARTICLES', result.data);
            return 'success';
        } else {
            return Promise.reject(result.message);
        }
    }
}
const mutations = {
    SET_ARTICLES(state, value) {
        state.articleList = value;
    }
}
const state = {
    articleList: []
}
const getters = {}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters,
}