const state = {
    list: [
        {name:'list1',value:'1'},
        {name:'list2',value:'2'},
        {name:'list3',value:'3'}
    ],
    msg: '测试数据'
}
const mutations = {
    setList: (state,value) => {
        state.list = value
    },
    setMsg: (state,value) => {
        state.msg = value
    }
}
const actions = {
    getMsg({commit},value) {
        commit('setMsg',value)
    }
}
// const getters = {
//     getList: state => {
//         return state.list
//     }
// }


export default {
    namespaced: true,
    state,
    mutations,
    actions
    // getters
}