<template>
    <div class="atb-card">
        <div class="atb-header">
            <h3>表格仿造导航功能</h3>
        </div>
        <div class="atb-block">
            <div style="display:flex">
                <div style="flex:1;margin-right:10px">
                    <el-table ref="detailTable1" class="atb-table" border size="mini" height="100%" :data="list1" highlight-current-row @current-change="currentChangeHandle">
                        <el-table-column label="仿造导航" prop="prop0"></el-table-column>
                    </el-table>
                </div>
                <div style="flex:3">
                    <el-table ref="detailTable" border size="mini" :data="list2">
                        <el-table-column label="第一列" prop="prop0"></el-table-column>
                        <el-table-column label="第二列" prop="prop1"></el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list1:[
                {'prop0':'导航1'},
                {'prop0':'导航2'},
                {'prop0':'导航3'},
                {'prop0':'导航4'},
                {'prop0':'导航5'},
                {'prop0':'导航6'},
            ],
            list2:[]
        }
    },
    created() {
        this.$nextTick(() => {
            this.$refs.detailTable1.setCurrentRow(this.list1[0])
        })
    },
    methods: {
        currentChangeHandle(row) {
            this.list2 = []
            let label = row.prop0
            this.list2.push(
                {'prop0':label+'11','prop1':label+'12'},
                {'prop0':label+'21','prop1':label+'22'},
                {'prop0':label+'31','prop1':label+'32'},

            )
        }
    },
}
</script>
<style scoped>

</style>