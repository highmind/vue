<template>
  <div class="content">
    <NavBar>
      <span slot="navbar-left">返回</span>
      <span slot="navbar-center">开眼视频</span>
      <span slot="navbar-right">查看更多</span>
    </NavBar>
    <Child>
      <h2 slot="header">念奴娇 赤壁怀古</h2>
      <p>大江东去，浪淘尽</p>
      <div slot="footer">苏轼</div>
    </Child>
  </div>
</template>

<script>
 // slot插槽的父组件
import Child from '@/components/Child'
import NavBar from '@/components/NavBar'

export default {
  name: 'main',
  data () {
    return {
         
    }
  },
  mounted:function(){
  },
  methods: {
   
  },
  components: {
    Child,
    NavBar
  }
}
</script>

<style scoped>

</style>
