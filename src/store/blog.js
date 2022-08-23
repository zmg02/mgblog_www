
const actions = {
    
}
const mutations = {
    CHANGEVIEWNAME(state, value) {
        state.viewName = value
    }
}
const state = {
    viewName: ''
}
const getters = {}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters,
}