const state = {
    count: 0,
    history: [],
    input: 'hello world'
}
const mutations = {
    increment(state) {
        state.count++
        state.history.push('increment')
    },
    decrement(state) {
        state.count--
        state.history.push('decrement')
    },
    testInput(state,value) {
        state.input = value
    }
}
const actions = {
    increment: ({commit}) => commit('increment'),
    decrement: ({commit}) => commit('decrement'),
    incrementIfOdd ({commit,state}) {
        if((state.count + 1)%2 === 0) {
            commit('increment')
        }
    },
    incrementAsync({commit}) {
        return new Promise((resolve) => {
            setTimeout(() => {
               commit('increment') 
               resolve()
            }, 1000);
        })
    },
    testInput: ({commit},value) => commit('testInput',value)
}
const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
    historyRecords: state => {
        let end,limit,begin
         end = state.history.length,
         limit = 5,
         begin = end - limit < 0 ? 0 : end -limit
        return state.history.slice(begin,end).join(',')
    },
    getInput: state => state.input
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}