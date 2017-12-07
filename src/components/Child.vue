<template>
  <div class="content">
     <slot name="header"></slot>
     <slot></slot>
     <slot name="footer"></slot>
  </div>
</template>

<script>
// 包含slot插槽的子组件
export default {
  name: 'child',
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
