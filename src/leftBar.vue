<!--导航组件-->
<template>
    <el-menu :default-active="$route.path" 
        router 
        class="el-menu-demo" 
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <!-- 一级菜单 -->
      <template v-for="(item) in routes">
          <el-menu-item v-if="!item.children" :key="item.id" :index="item.path">
              {{item.label}}
          </el-menu-item>
          <!-- 二级菜单 -->
          <el-submenu v-if="item.children" :index="item.path+''" :key="item.id" :popper-append-to-body="false">
              <template slot="title">
                  <span>{{item.label}}</span>
              </template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.id">
                  <template slot="title">
                    <span>{{child.label}}</span>
                  </template>
              </el-menu-item>
          </el-submenu>
      </template>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        routes() {
            return this.$router.options.routes.slice(2)
        }
    }
}
</script>