<template>
  <div class="content">
    <h2 v-bind:style="{ color: datacolor }">被嵌套的组件-子组件1</h2>
    <button v-on:click="addchild">+</button>
  </div>
</template>

<script>
import bus from "../assets/bus"

export default {
  name: 'child1',
  data () {
    return {
      datacolor: '#000' 
    }
  },
  mounted: function(){
    let self = this;
    bus.$on('reduce',function(){
      self.datacolor = 'red'
    })
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
