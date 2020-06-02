<template>
    <div>
        <el-input v-model="test"></el-input>
        <el-button @click="change">修改store里存储的数据</el-button>
        <h3>{{msg}}</h3>
    </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
    data() {
        return {
            test: 'test'
        }
    },
    computed: {
        ...mapState('store',['list','msg']),
    },
    created() {

    },
    methods: {
        ...mapActions('store',['getMsg']),
        change() {
            this.getMsg(this.test)
        }
    }
}
</script>