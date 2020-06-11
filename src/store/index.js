import Vue from 'vue'
import Vuex from 'vuex'
import store from './store.js'
import counter from './counter.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        store,
        counter
    }
})