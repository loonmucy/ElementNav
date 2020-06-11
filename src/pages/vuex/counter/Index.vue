<template>
    <div>
        点击次数：{{$store.state.counter.count}}, count is {{evenOrOdd}}
        <el-button @click="increment">increment</el-button>
        <el-button @click="decrement">decrement</el-button>
        <el-button @click="incrementIfOdd">increment if odd</el-button>
        <el-button @click="incrementAsync">increment async</el-button>
        <hr>
        最后5次操作记录：{{historyRecords}}
        <el-input v-model="input"></el-input>
        <el-button @click="modify">modify</el-button>
        {{getInput}}
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            input: 'input'
        }
    },
    computed: {
        ...mapGetters('counter',['evenOrOdd','historyRecords','getInput'])
    },
    created() {
        // console.log(this.$store.state.counter.count)
    },
    methods: {
        ...mapActions('counter',['increment','decrement','incrementIfOdd','incrementAsync','testInput']),
        modify() {
            this.testInput(this.input)
        }
    }
}
</script>