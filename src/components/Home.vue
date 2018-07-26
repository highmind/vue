<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ul>
      <li><router-link to="/todolist">TodoList-待办事项</router-link></li>
      <li><router-link to="/shop">购物车</router-link></li>
      <li><router-link to="/ani">使用anime.js</router-link></li>
      <li><router-link to="/form">使用Form</router-link></li>
      <li><router-link to="/main">slot插槽</router-link></li>
      <li><router-link to="/component">使用props传递数据</router-link></li>
      <li><router-link to="/movie">axios获取远程数据</router-link></li>
      <li><router-link to="/provice">省市级联</router-link></li>
      <li><router-link to="/lifecycle">组件生命周期</router-link></li>
      <li><router-link to="/parent">父子组件间通信</router-link></li>
      <li><router-link to="/brother">兄弟组件间通信</router-link></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
