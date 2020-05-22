<template>
    <div class="atb-card">
        <div class="atb-header">
            <h3>表格动态行列</h3>
        </div>
        <div class="atb-block">
            <el-form>
                <el-row>
                    <el-col :span="2">
                        <el-button @click="loadData()" size="mini">查询</el-button>
                    </el-col>
                </el-row>
            </el-form>
            <el-table ref="detailTable" border size="mini" :data="list">
                <el-table-column v-for="item in tableItems" :key="item.label" :prop="item.prop" :label="item.label"></el-table-column>
            </el-table>
        </div>
            
            
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableItems: [],
            list: []
        }
    },
    created() {
    },
    methods: {
        loadData() {
            this.list = []
            this.tableItems = []
            let jsonData = {
                'head':[
                    '第一列','第二列','第三列'
                ],
                'body':[
                    ['第一行','11','12'],
                    ['第二行','21','22'],
                    ['第三行','31','32'],
                    ['第四行','41','42']
                ]
            }
            let columnData = jsonData.head
            let rowData = jsonData.body
            columnData.map((val,index) => {
                this.tableItems.push({
                    label:val,
                    prop:'prop'+[index]
                })
            })
            // console.log(this.tableItems)
            rowData.map(val => {
                let middleObj = {}
                val.map((val1,index1) => {
                    middleObj['prop'+index1] = val1 
                })
                this.list.push(middleObj)
            })
            // console.log(this.list)


        },
    },
}
</script>
<style scoped>

</style>