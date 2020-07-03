<template>
   <div style="text-align:right;margin-right:20px">
      <span>{{userName}}</span>
       <el-button type="primary" plain size="mini" @click="handleOut">退出</el-button>
   </div>
</template>

<script>
export default {
   data() {
      return {
         userName: sessionStorage.name
      }
   },
   computed: {

   },
   created() {
      // console.log(this.$store.state.store.userName)
   },
   methods: {
      handleOut() {
         sessionStorage.removeItem('name')
         this.$router.push({path:'/login'})
      }
   }
}
</script>