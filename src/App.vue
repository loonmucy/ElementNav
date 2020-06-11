<template>
  <div id="app" class="atb-container">
    <div class="left-bar">
      <leftBar></leftBar>
    </div>
    <div class="main-data">
      <layout></layout>
    </div>
    
  </div>
</template>

<script>
import leftBar from './leftBar'
import layout from './layout'

export default {
  name: 'App',
  components: {
    layout,leftBar
  },
  data() {
    return {

    }
  },
  created() {
    // console.log(this.$store)
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
}
.left-bar {
  flex: 1;
  text-align: center;
  background: rgb(84, 92, 100);
}
.main-data {
  flex: 7;
  padding: 30px;
}
</style>
