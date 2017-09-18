<template>
    <button class="button"
    v-bind:class="classObject"
    v-on:click="dothings">{{text}}</button>
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
      btnCls: 'default'
    }
  },
  computed: {
    classObject () {
      return (
        this.type
      )
    }

  },
  methods: {
    dothings () {
      console.log(this.type)
      this.isDanger = !this.isDanger
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.danger{background-color: #ef4f4f;color:#fff;}
.button{display: block;border:none;width:80px;outline: none;height:40px;border-radius:4px;border:none;cursor:pointer}
.default{background-color:#f6f8fa;color:#656B79; }
.primary{background-color: #26a2ff;color:#fff;}
</style>
