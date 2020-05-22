<template>
         <div class="atb-card">
             <div class="atb-header">
                 <h3>表格动态列</h3>
             </div>
             <div class="atb-block">
                <el-form>
                    <el-row>
                        <el-col :span="22">
                            <el-form-item label="选择框:">
                                <el-checkbox-group v-model="checkedItems" @change="handleCheckedItemsChange">
                                    <el-checkbox class="mini-right-checkbox" v-for="item in toCheckItems" :key="item.id" :label="item">{{item.label}}</el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="2">
                            <el-button @click="loadData()" size="mini">查询</el-button>
                        </el-col>
                    </el-row>
                </el-form>
                <el-table ref="detailTable" border size="mini" :data="list">
                    <el-table-column v-for="item in tableItems" :key="item.label" :prop="item.prop" :label="item.label"></el-table-column>
                </el-table>
             </div>
             <div class="atb-footer">
             </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            checkedItems: [],
            toCheckItems: [
                {'label':'第一列',id:'1','value':'prop1'},
                {'label':'第二列',id:'2','value':'prop2'},
                {'label':'第三列',id:'3','value':'prop3'}
            ],
            tableItems: [],
            list: []
        }
    },
    created() {
        this.loadData()
    },
    methods: {
        handleCheckedItemsChange(val) {
            let copyVal = []
            val.map(value => {
                copyVal.push(
                    {'label':value.label,'prop':value.value}
                )
            })
            this.tableItems = copyVal
        },
        loadData() {
            this.list = [
                {'prop1':'11','prop2':'12','prop3':'13'},
                {'prop1':'21','prop2':'22','prop3':'23'},
                {'prop1':'31','prop2':'32','prop3':'33'},
                {'prop1':'41','prop2':'42','prop3':'43'},
            ]
        },
    },
}
</script>
<style scoped>
</style>