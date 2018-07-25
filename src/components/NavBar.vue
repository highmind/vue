<template>
  <div class="navbar">
    <div class="navbar-left">
    	<slot name="navbar-left"></slot>
    </div>
    <div class="navbar-center">
    	<slot name="navbar-center"></slot>
    </div>
    <div class="navbar-right">
    	<slot name="navbar-right"></slot>
    </div>
  </div>
</template>

<script>
import child1 from './Child1'
export default {
  name: 'navbar',
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
  .navbar{width:400px;height:40px;line-height:40px;display:flex;background-color:orange;color:#fff;}
  .navbar-left{flex:1;}
  .navbar-center{flex:3;}
  .navbar-right{flex:1;}
</style>
