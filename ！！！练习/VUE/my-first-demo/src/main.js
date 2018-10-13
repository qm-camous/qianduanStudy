// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
 //引入VueRouter
 import VueRouter from 'vue-router'
 // 引入VueResource
 import vueResource from 'vue-resource'
 // 引入App组件
import App from './App'
// 引入Users组件
import Users from './components/Users'
// 引入Test组件
import Test from './components/Test'
// 引入Selected组件
import Select from './components/Selected'
// 引入FixedTable.vue
import FixedTable from './components/FixedTable'
// 引入jquery
import $ from 'jquery'
// 引入bootstrap
import 'bootstrap'
// 引入 bootstrap.min.css
import 'bootstrap/dist/css/bootstrap.min.css'
// 引入 bootstrap.min.js
import 'bootstrap/dist/js/bootstrap.min.js'
Vue.use(VueRouter)
Vue.use(vueResource)
 
Vue.config.productionTip = false
// **********************设置路由Start*******************
 const router = new VueRouter({
 	mode:'history',
 	base:__dirname,
 	routes:[
 		{path:"/",component:Users},//这里用component而不能用components
 		{path:"/test",component:Test},
 		{path:"/select",component:Select},
 		{path:"/fixtable",component:FixedTable}
 		]
 })
 // **********************设置路由End*******************
/* eslint-disable no-new */
new Vue({
  router,
  template: '<div id="app"><ul><li><router-link to="/fixtable">冻结表头</router-link></li> <li><router-link to="/select">基于vue，实现一个下拉多选的组件</router-link></li> <li><router-link to="/">Users</router-link></li>  <li><router-link to="/test">Test</router-link></li> </ul><router-view></router-view></div>'
}).$mount("#app")