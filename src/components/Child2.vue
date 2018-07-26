<template>
  <div class="content">
    <h2>被嵌套的组件-子组件2</h2>
    <button v-on:click="reducechild">-</button>
  </div>
</template>

<script>
import bus from "../assets/bus"

export default {
  name: 'child2',
  data () {
    return {
         
    }
  },
  mounted:function(){
  },
  methods: {
    reducechild: function(){
    	bus.$emit('reduce')
    }
  }
}
</script>

<style scoped>

</style>
