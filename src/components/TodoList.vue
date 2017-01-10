<template>
  <div class="todolist">
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-on:click="finish(item)" v-bind:class="{complete:item.finished}">{{item.text}}</li>
      <!-- <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li> -->
    </ul>
  </div>
</template>

<script>
export default {
 name: 'todolist',
 data(){
   return{
     items:[
       {text:"Vue 技术栈", finished:false},
       {text:"React 技术栈", finished:false},
       {text:"Angular 技术栈", finished:false},
     ],
     newItem:"" //表单值
   }
 },
 methods:{
   finish(item){
     item.finished = !item.finished;
   },
   addNew(){
     this.items.unshift({text:this.newItem, finished:false});//在数组前面插入数据
     this.newItem = "";
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
.complete{text-decoration:line-through;}
</style>
