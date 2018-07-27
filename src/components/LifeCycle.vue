<template>
  <div class="content">
    <h1>组件生命周期</h1>
    <h2>{{ num }}</h2>
    <button v-on:click="changeData">加1</button>
    <button v-on:click="del">销毁组件</button>
  </div>
</template>

<script>

export default {
  name: 'LifeCycle',
  data () {
    return {
      num: 1
    }
  },
  
  methods: {
    changeData: function() {
    	this.num = this.num + 1
    },
    del: function(){
      this.$destroy()
    }
  },

  beforeCreate() {
  	console.log("beforeCreate---组件刚被创建")
  	console.log(this.$el)
  },

  created() {
    console.log("created---组件创建完成,属性已绑定,DOM未生成")
    console.log(this.$el)
  },
   
  beforeMount() {
    console.log("beforeMount---模板挂载之前")
    console.log(this.$el)

  },

  mounted() {
    console.log("mounted---模板挂载之后")
    console.log(this.$el)
  },

  beforeUpdate() {
  	console.log("beforeUpdate---组件更新之前")
  	console.log(this.$el)
  },

  updated() {
  	console.log("updated---组件更新之后")
  	console.log(this.$el)
  },

  beforeDestroy() {
  	console.log("beforeDestory---组件销毁之前")
  	console.log(this.$el)
  },

  destroyed() {
  	console.log("destoryed---组件销毁之后")
  	console.log(this.$el)
  }
  
}
</script>

<style>

</style>
