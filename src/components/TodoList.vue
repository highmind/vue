<template>
    <ul class="todolist">
      <li v-for="item in items" v-on:click="finish(item)" v-bind:class="{complete:item.finished}">{{item.text}}</li>
      <!-- <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li> -->
    </ul>
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
     ]
   }
 },
 methods:{
   finish(item){
     item.finished = !item.finished;
   }
 }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todolist{list-style:none;text-align:left;margin:0;padding:0}
.todolist li{cursor: pointer;margin:0;padding:0;}
.complete{text-decoration:line-through;}
</style>
