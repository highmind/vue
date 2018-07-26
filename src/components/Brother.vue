<template>
  <div class="content">
    <h2>兄弟组件之间的通信</h2>
    <child1></child1>
    <child2></child2>
  </div>
</template>

<script>

import child1 from './Child1'
import child2 from './Child2'
export default {
  name: 'brother',
  data () {
    return {
         
    }
  },
  mounted:function(){
  },
  methods: {
    
  },
  components: {
  	child1,
  	child2
  }
}
</script>

<style scoped>

</style>
