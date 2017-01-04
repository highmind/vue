<template>
  <div>
    <button class="button"
    v-bind:class="{ 'danger': isDanger }"
    v-on:click="dothings()">{{text}}</button>

</template>

<script>
export default {
  name: 'button',
  props: {
    text: String,
    type: String
  },
  data () {
    return {
      // text: '默认按钮'
    }
  },
  methods: {
    dothings(){
      console.log(111)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button{display: block;border:none;width:80px;height:40px;border-radius:4px;border:none;cursor:pointer}
.default-btn{background-color:#f6f8fa;color:#656B79; }
</style>
