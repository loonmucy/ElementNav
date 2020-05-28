<template>
    <div>
        <el-button @click="add()">添加</el-button>
        <el-table ref="detailTable" border size="mini" :data="list">
            <el-table-column label="第一列" prop="prop0"></el-table-column>
            <el-table-column label="第二列" prop="prop1"></el-table-column>
            <el-table-column label="第三列" prop="prop2"></el-table-column>
            <el-table-column label="第四列" prop="prop3"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="add(scope.row)">修改</el-button>
                    <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <dialog-content ref="dialogContent">
            <template slot="content"> 
                <component :is="dialog.contentComponent" :dialog="dialog"></component>
            </template>
        </dialog-content>
    </div>
</template>
<script>
import add from './add'
import DialogContent from './dialogContent'
export default {
    components: {
        DialogContent
    },
    data() {
        return {
            dialog: {

            },
            list: [
                {id:'01',prop0:'11',prop1:'12',prop2:'13',prop3:'14',
                    list:[
                        {name:'张三',age:'10'},
                        {name:'王五',age:'14'},
                    ]
                },
                {id:'02',prop0:'21',prop1:'22',prop2:'23',prop3:'24',
                    list:[
                        {name:'张八',age:'19'},
                        {name:'王六',age:'15'},
                    ]
                },
                {id:'03',prop0:'31',prop1:'32',prop2:'33',prop3:'34'}
            ],
        }
    },
    created() {

    },
    methods: {
        add(row={}) {
            // console.log(row)
            this.dialog = {
                contentComponent: add,
                row: row
            }
            this.$refs.dialogContent.dialogVisible = true
        },
       
        handleDelete(index) {
            this.list.splice(index,1)
        },
    }
}
</script>