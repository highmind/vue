<template>
  <div class="content">
    <h3>使用props传递数据</h3>
    <div class="msg-box">{{warningText}}</div>
  </div>
</template>

<script>


export default {
  name: 'MessageBox',
  props: ['warningText'],
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
