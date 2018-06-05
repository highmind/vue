<template>
  <div class="todolist">
    <h1>Todolist</h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in listData" v-on:click="finish(item)" v-bind:class="{complete:item.finished}">{{item.text}}</li>
      <!-- <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li> -->
    </ul>
    <div class="btn-section">
      <button v-on:click="showAll">所有</button>
      <button v-on:click="showFinish">已完成</button>
      <button v-on:click="showDoing">未完成</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'todolist',
  data () {
    return {
      items: [],  //实际使用数据
      testData: [ //测试数据
      {text:'吃饭',isover: false},
      {text:'睡觉',isover: false},
      {text:'打豆豆',isover: false}
      ],
      newItem: '', //  表单值
      type: 0,  // 所有0  未完成1 完成2 
    }
  },
  computed: {
    listData : function(){
      switch (this.type){
        case 0:
          return this.items;
          break;

        case 1:
          return this.items.filter(function(item){
            return item.finished == false;
          })
          break;

        case 2:
          return this.items.filter(function(item){
            return item.finished == true;
          })
          break;
      }
    }
  },
  methods: {
    finish (item) {
      item.finished = !item.finished
    },
    addNew () {
      this.items.unshift({text: this.newItem, finished: false}) //  在数组前面插入数据
      this.newItem = ''
    },
    over (item) {
      item.isover = !item.isover
   },
   showAll () {
     this.type = 0;
   },
   showFinish () {
     this.type = 2;
   },
   showDoing () {
      this.type = 1;
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todolist{width:400px;margin:0 auto;}
.todolist input{width:400px;height:30px;line-height:30px;}
.todolist ul{list-style:none;text-align:left;margin:0;padding:0}
.todolist li{margin:0;padding:0;margin-top:10px;margin-left:10px;cursor: pointer;}
.complete{text-decoration:line-through;color:#ccc;}
.btn-section{margin-top:20px;}
</style>
