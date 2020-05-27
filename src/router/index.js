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


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {path:'/',name:'home',component:home,label:'首页',id:'01'},
      {path:'/page1',name:'page1',component:page1,label:'页面1',id:'05'},
      {path:'/tableComponent',name:'tableComponent', label:'表格组件',component:layout,id:'07',children:[
        {path:'/tableComponent/checkboxAddTable',name:'checkboxAddTable',component:checkboxAddTable,label:'表格动态列',id:'0701'},
        {path:'/tableComponent/dynamicForm',name:'dynamicForm',component:dynamicForm,label:'表格动态行列',id:'0702'},
        {path:'/tableComponent/tableRowClass',name:'tableRowClass',component:tableRowClass,label:'表单行样式',id:'0703'},
        {path:'/tableComponent/dynamicAddRow',name:'dynamicAddRow',component:dynamicAddRow,label:'动态添加表格行',id:'0704'},
        {path:'/tableComponent/copyNavigation',name:'copyNavigation',component:copyNavigation,label:'表格仿造导航功能',id:'0705'}
      ]},
      {path:'/echartsPage',name:'echartsPage',component:echartsPage,label:'echarts图表',id:'08'},
      {path:'/popUpBox',name:'popUpBox',component:popUpBox,label:'弹出框',id:'09'},
    ]
  })

export default router