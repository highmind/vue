<template>
  <div class="content">
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

export default {
  name: 'main',
  data () {
    return {
         
    }
  },
  mounted:function(){
  },
  methods: {
   
  }
}
</script>

<style scoped>

</style>
