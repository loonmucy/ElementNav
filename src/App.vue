<template>
  <div id="app" class="atb-container">
    <router-view class="left-bar" name="leftBar"></router-view>
    <div class="main-data">
        <router-view class="header-class" name="headerBar"></router-view>
        <!-- <router-view /> -->
        <layout style="padding:0 30px;flex:20;margin-top:-10px;"></layout>
    </div>
    
  </div>
</template>

<script>
import layout from './layout'

export default {
  name: 'App',
  components: {
    layout
  },
  data() {
    return {

    }
  },
  created() {
    console.log(this.$route)
  },
  methods: {

  }
}
</script>

<style>
.atb-container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.left-bar {
  flex: 1;
  text-align: center;
  background: rgb(84, 92, 100);
  overflow: auto;
}
.main-data {
  flex: 7;
  /* padding: 30px; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow:auto
}
.header-class {
  padding-top:10px;
  flex:1;
}
</style>
