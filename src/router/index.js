import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home.vue'
import layout from '@/layout.vue'
import page1 from '@/pages/page1/Index.vue'
import checkboxAddTable from '@/pages/tableComponent/checkboxAddTable'
import dynamicForm from '@/pages/tableComponent/dynamicForm'
import tableRowClass from '@/pages/tableComponent/tableRowClass'
import dynamicAddRow from '@/pages/tableComponent/dynamicAddRow'
import copyNavigation from '@/pages/tableComponent/copyNavigation'
import echartsPage from '@/pages/echartsPage/Index'
import popUpBox from '@/pages/popUpBox/Index'
import counter from '@/pages/vuex/counter/Index'
import leftBar from '@/leftBar.vue'
import login from '@/login.vue'
import header from '@/header.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {path: '/',redirect:'/login'},
      {path:'/login',name:'login',component: login,label:'登录',id:'00'},
      {path:'/home',name:'home',components:{default:home,leftBar:leftBar,headerBar:header},label:'首页',id:'01'},
      {path:'/vuex',name:'vuex',components:{default:layout,leftBar:leftBar,headerBar:header},label:'vuex',id:'05',children: [
        {path:'/vuex/page1',name:'page1',components:{default:page1,leftBar:leftBar,headerBar:header},label:'page1',id:'0501'},
        {path:'/vuex/counter',name:'counter',components:{default:counter,leftBar:leftBar,headerBar:header},label:'counter',id:'0502'}
      ]},
      {path:'/tableComponent',name:'tableComponent', label:'表格组件',components:{default:layout,leftBar:leftBar,headerBar:header},id:'07',children:[
        {path:'/tableComponent/checkboxAddTable',name:'checkboxAddTable',components:{default:checkboxAddTable,leftBar:leftBar,headerBar:header},label:'表格动态列',id:'0701'},
        {path:'/tableComponent/dynamicForm',name:'dynamicForm',components:{default:dynamicForm,leftBar:leftBar,headerBar:header},label:'表格动态行列',id:'0702'},
        {path:'/tableComponent/tableRowClass',name:'tableRowClass',components:{default:tableRowClass,leftBar:leftBar,headerBar:header},label:'表单行样式',id:'0703'},
        {path:'/tableComponent/dynamicAddRow',name:'dynamicAddRow',components:{default:dynamicAddRow,leftBar:leftBar,headerBar:header},label:'动态添加表格行',id:'0704'},
        {path:'/tableComponent/copyNavigation',name:'copyNavigation',components:{default:copyNavigation,leftBar:leftBar,headerBar:header},label:'表格仿造导航功能',id:'0705'}
      ]},
      {path:'/echartsPage',name:'echartsPage',components:{default:echartsPage,leftBar:leftBar,headerBar:header},label:'echarts图表',id:'08'},
      {path:'/popUpBox',name:'popUpBox',components:{default:popUpBox,leftBar:leftBar,headerBar:header},label:'弹出框',id:'09'},
    ]
  })

export default router