<template>
  <div class="content">
     <h1>包含子组件的组件</h1>
     <h2>父组件里面的 {{ num }}</h2>
     <child1 v-on:addchild="add"></child1>
  </div>
</template>

<script>
import child1 from './Child1'
export default {
  name: 'parent',
  data () {
    return {
        num: 0 
    }
  },
  mounted:function(){
  },
  methods: {
    add: function(){
      this.num++;
    } 
  },
  components: {
  	child1
  }
}
</script>

<style scoped>

</style>
