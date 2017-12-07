<template>
  <div class="content">

    <h3>1. v-model和表单</h3>
    <input type="text" v-model="message" placeholder="输入">
    <p>输入的内容是:{{message}}</p>
    
    <h3>2. 单个单选按钮</h3>
    <input type="radio" v-bind:checked="picked">
    <label for="">李白</label>
    
    <h3>3. 多个单选按钮组合</h3>
    <input type="radio" v-model="picked2" value="李白" id="a1">
    <label for="a1">李白</label>
    <input type="radio" v-model="picked2" value="杜甫" id="a2">
    <label for="a2">杜甫</label>
    <input type="radio" v-model="picked2" value="王维" id="a3">
    <label for="a3">王维</label>
    <p>您的选项是:{{ picked2 }}</p>

    <h3>4. 单个复选框</h3>
    <input type="checkbox" v-model="checked" id="checked">
    <lable for="checked">选择状态：{{checked}}</lable>
    
    <h3>5. 组合复选框</h3>
    <input type="checkbox" v-model="checked1" value="李白" id="c1">
    <label for="c1">李白</label>
    <input type="checkbox" v-model="checked1" value="杜甫" id="c2">
    <label for="c2">杜甫</label>
    <input type="checkbox" v-model="checked1" value="王维" id="c3">
    <label for="c3">王维</label>
    <p>选择的项是: {{ checked1 }}</p>

    <h3>6. 单选选择列表</h3>
    <select v-model="selected">
      <option value="李白">李白</option>
      <option value="杜甫">杜甫</option>
      <option value="王维">王维</option>
    </select>
    <p>选择的项是: {{ selected }}</p>

  </div>
</template>

<script>

export default {
  name: 'form',
  data () {
    return {
      message: '',
      picked: true,
      picked2: '李白',
      checked: false,
      checked1: [],
      selected: '杜甫'
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
