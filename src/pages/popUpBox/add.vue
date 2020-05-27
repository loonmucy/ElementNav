<template>
    <div>
        <el-table ref="detailTable" border size="mini" :data="list">
            <el-table-column label="第一列" prop="prop0"></el-table-column>
            <el-table-column label="第二列" prop="prop1"></el-table-column>
            <el-table-column label="第三列" prop="prop2"></el-table-column>
            <el-table-column label="第四列" prop="prop3"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    props: {
    },
    data() {
        return {
            list: [
                {prop0:'11',prop1:'12',prop2:'13',prop3:'14'},
                {prop0:'21',prop1:'22',prop2:'23',prop3:'24'},
                {prop0:'31',prop1:'32',prop2:'33',prop3:'34'}
            ]
        }
    },
    created() {
       
    },
    methods: {

    }
    
}
</script>