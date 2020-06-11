const state = {
    msg: '测试数据'
}
const mutations = {
    setMsg: (state,value) => {
        state.msg = value
    }
}
const actions = {
    getMsg({commit},value) {
        commit('setMsg',value)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
    // getters
}