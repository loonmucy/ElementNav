<template>
    <div>
        <el-button type="primary" @click="add">添加</el-button>
        <dialogContent ref="dialogContent">
            <template slot="content"> 
                <component :is="contentComponent"></component>
            </template>
        </dialogContent>
    </div>
</template>
<script>
import add from './add'
import dialogContent from './dialogContent'
export default {
    components: {
        dialogContent
    },
    data() {
        return {
            contentComponent: add
        }
    },
    created() {

    },
    methods: {
        add() {
            this.$refs.dialogContent.dialogVisible = true
        },
    }
}
</script>