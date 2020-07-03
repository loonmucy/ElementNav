<template>
    <el-form class="form-login" :model="form" label-width="80px">
        <el-col :offset="6" :span="12">
            <el-form-item label="账号">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
        </el-col>
        <el-col :offset="6" :span="12">
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
        </el-col>
        <el-col :offset="6" :span="12">
            <el-button @click="handleLogin">登录</el-button>
            <el-button @click="handleReset">重置</el-button>
        </el-col>
    </el-form>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: 'admin'
            }
        }
    },
    created() {

    },
    methods: {
        handleLogin() {
            // if(this.form.name != 'admin') {
                sessionStorage.setItem('name',this.form.name)
                this.$router.push({path:'/home'})
            // }
        },
        handleReset() {
            this.form.name = '',
            this.form.password = ''
        },
    }
}
</script>
<style scoped>
.form-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #eee;
    text-align: center;
    height: 100%;
    width: 100%;
}
</style>