<template>
    <div>
        <el-form label-width="80px">
            <el-form-item label="第一列">
                <el-input v-model="editRow.prop0"></el-input>
            </el-form-item>
            <el-form-item label="第二列">
                <el-input v-model="editRow.prop1"></el-input>
            </el-form-item>
            <el-form-item label="第四列">
                <el-input v-model="editRow.prop3"></el-input>
            </el-form-item>
        </el-form>
        <el-table ref="addTable" border size="mini" :data="editRow.list">
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column label="年龄" prop="age"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    props: {
        dialog: {
            type: Object,
            default: ()=>{}
        }
    },
    data() {
        return {
            editRow: {
            }
        }
    },
    watch: {
        'dialog.row': {
            handler: function(val) {
                this.editRow = val
            },
            deep: true
        }
    },
    created() {
        //解决首次加载弹窗没有数据问题
        this.editRow = this.dialog.row
    },
    methods: {

    }
    
}
</script>