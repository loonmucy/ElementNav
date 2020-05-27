<template>
    <el-dialog 
        title="新增" 
        :visible.sync="dialogVisible"
        width="50%">
        <slot name="content"></slot>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible=false">取消</el-button>
            <el-button type="primary" @click="dialogVisible=false">确定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            dialogVisible: false,
        }
    },
    created() {
    },
    methods: {

    }
    
}
</script>