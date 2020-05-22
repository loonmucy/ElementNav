<template>
    <div class="atb-card">
        <div class="atb-header">
            <h3>动态添加表格行</h3>
        </div>
        <div class="atb-block">
            <el-form>
                <el-row>
                    <el-col :span="6">
                        <!-- <el-button @click="loadData" size="mini">查询</el-button> -->
                        <el-button @click="addRow" size="mini">新增表格行</el-button>
                        <el-button @click="handleSave" size="mini">提交</el-button>
                    </el-col>
                </el-row>
            </el-form>
            <el-table ref="detailTable" border size="mini" :data="list">
                <el-table-column label="第一列" prop="prop0">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.prop0"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="第二列" prop="prop1">
                   <template slot-scope="scope">
                        <el-input v-model="scope.row.prop1"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="第三列" prop="prop2">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.prop2"></el-input>
                    </template>
                </el-table-column>
                <el-table-column>
                    <template slot-scope="scope">
                        <button @click="handleDelete(scope.$index,scope.row)">删除</button>
                    </template>
                </el-table-column>
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
        addRow() {
            let labelProp = {
                'prop0':'',
                'prop1':'',
                'prop2':''
            }
            this.list.push(labelProp)
        },
        handleDelete(index) {
            this.list.splice(index,1)
        },
        handleSave() {
            console.log(JSON.stringify(this.list))
        }
    },
}
</script>
<style scoped>

</style>>