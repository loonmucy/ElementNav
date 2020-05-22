<template>
    <div class="atb-card">
        <div class="atb-header">
            <h3>表单行样式</h3>
        </div>
        <div class="atb-block">
            <el-form>
                <el-row>
                    <el-col :span="2">
                        <el-button @click="loadData()" size="mini">查询</el-button>
                    </el-col>
                </el-row>
            </el-form>
            <el-table ref="detailTable" border size="mini" :data="list" :row-class-name="tableRowClassName">
                <el-table-column label="第一列" prop="prop0"></el-table-column>
                <el-table-column label="第二列" prop="prop1"></el-table-column>
                <el-table-column label="第三列" prop="prop2"></el-table-column>
                <el-table-column label="第四列" prop="prop3"></el-table-column>
                <el-table-column label="第五列" prop="prop4"></el-table-column>
            </el-table>
        </div>       
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
    },
    methods: {
        loadData() {
            this.list = [
                { 'prop0':'11','prop1':'12','prop2':'13','prop3':'14','prop4':'15' },
                { 'prop0':'21','prop1':'22','prop2':'23','prop3':'小计','prop4':'25' },
                { 'prop0':'31','prop1':'32','prop2':'小计','prop3':'34','prop4':'35' },
                { 'prop0':'41','prop1':'42','prop2':'合计','prop3':'44','prop4':'45' },
                { 'prop0':'51','prop1':'合计','prop2':'53','prop3':'54','prop4':'55' },
            ]
        },
        tableRowClassName({row}) {
            for(let i in row) {
                if(row[i] == '小计') {
                    return 'addtotal-row'
                }else if(row[i] == '合计') {
                    return 'subtotal-row'
                }
            }
        },

    //     tableRowClassName({row}) {
    //   if (this.findKey(row,'合计')) {
    //     return 'addtotal-row';
    //   } else if (this.findKey(row,'小计')) {
    //     return 'subtotal-row';
    //   }else if (this.findKey(row,'所有行总计')) {
    //     return 'sumtotal-row';
    //   }
    //   return '';
    // },
    // findKey(obj, value, compare = (a, b) => a === b) {
    //   return Object.keys(obj).find(k => compare(obj[k], value))
    // },
    },
}
</script>
<style>

</style>>