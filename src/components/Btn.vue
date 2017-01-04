<template>
  <span class="button">{{text}}</span>
</template>

<script>
export default {
  name: 'btn',
  data () {
    return {
      text: '普通按钮'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button{display: block;width:80px;height:40px;border:none;background-color: red;}
</style>
