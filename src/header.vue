<template>
   <div style="text-align:right;margin-right:20px">
       <el-button type="primary" plain size="mini" @click="handleOut">退出</el-button>
   </div>
</template>

<script>
export default {
   data() {
      return {
         
      }
   },
   created() {

   },
   methods: {
      handleOut() {
         sessionStorage.removeItem('name')
         this.$router.push({path:'/login'})
      }
   }
}
</script>