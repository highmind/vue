<template>
  <div class="content">
    <h2>被嵌套的组件-子组件</h2>
    <button v-on:click="addchild">+</button>
  </div>
</template>

<script>


export default {
  name: 'child1',
  data () {
    return {
         
    }
  },
  mounted:function(){
  },
  methods: {
    //发送事件
    addchild: function(){
      this.$emit('addchild');
    }
  }
}
</script>

<style scoped>

</style>
