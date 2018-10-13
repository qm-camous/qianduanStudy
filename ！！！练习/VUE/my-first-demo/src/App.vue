<template>
  <div id="app">
    <!-- 下面test中的内容暂时不会用到，先屏掉 -->
  <!-- <test msg="我是新的值啦！"></test> -->
    <!-- users中的内容 -->
    <users></users>
  </div>
</template>

<script>
//引入Test.vue中的组件
import Test from './components/Test.vue'
//引入Users.vue中的组件
import Users from './components/Users.vue'
// 引入Selected.vue中的组件
import Selected from './components/Selected.vue'
// 引入FixedTable.vue
import FixedTable from './components/FixedTable.vue'
export default {
  name: 'App',
  components: {
    Test,Users,Selected,FixedTable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
