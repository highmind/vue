<template>
  <div class="content">
    <ul class="list">
    	<li v-for="m in movie">
    	  <router-link :to="{ name: 'Detail', params: { id: m.id }}">

    	  	<div class="flex-wrap">
    	  	  <div class="flex1">
	          	<img width="100" v-bind:src="m.img" alt="">
	          </div>
	          
	          <div class="flex3 movie-content">
	          	<span class="title">{{ m.nm }}</span>
	          	<span>{{ m.star }}</span>
	          	<span>{{ m.rt }}</span>
	          	<span>{{ m.showInfo }}</span>
	          </div>
    	  	</div>
	          
    	  </router-link>
    	 
        </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'Movie',

  data () {
    return {
      movie: [],
      test:[]
    }
  },
  mounted:function(){
  	let _self = this;
    axios.get('http://localhost:3000/list?type=hot&offset=0&limit=10')
    .then(function(res){
      let movie = res.data.data.movies;
      _self.movie = movie;
      console.log(res.data.data.movies);
    })
    .catch(function(err){
      console.log(err);
    });

    axios.get('http://localhost:3000/test')
    .then(function(res){
      let test = res.data.title;
      _self.test = test;
    })

  },
  methods: {
    
  }
}
</script>


<style scoped>
  .content{width:400px;padding:10px;border:1px solid #ccc;margin:0 auto;}
  .content ul,.content li{padding:0;margin:0;}
  .list li{list-style: none;margin-bottom:12px;text-align: left;border-bottom:1px solid #ccc;}
  .flex-wrap{display:flex;flex-direction:row;width:100%;}
  .flex1{flex:1;}
  .flex3{flex:3;}
  .movie-content{padding-left:10px;}
  .movie-content span{display: block;margin-bottom:6px;}
  .list li a{text-decoration: none;color:#000;}
  .title{font-size:18px;font-weight:bold;}
</style>
