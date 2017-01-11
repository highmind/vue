<template>
  <div id="app">
    <img src="./assets/logo.png">
    <todolist></todolist>
    <btn text="警告" type="danger"></btn>
    <btn text="取消" type="default"></btn>
    <btn text="提交" type="primary"></btn>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Todolist from './components/TodoList'
import Btn from './components/Button'
export default {
  name: 'app',
  components: {
    Hello,
    Btn,
    Todolist
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
