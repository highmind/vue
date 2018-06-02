<template>
  <div class="content">
    <h1>{{movie.nm}}</h1>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'Detail',

  data () {
    return {
      movie: {}
    }
  },
  mounted:function(){
  	let _self = this;
  	let id = this.$route.params.id;
    axios.get(`http://localhost:3000/detail?id=${id}`)
    .then(function(res){
      let movie = res.data.data.MovieDetailModel;
      _self.movie = movie;
    })
    .catch(function(err){
      console.log(err);
    })
  }
}
</script>


<style scoped>
  .content{width:400px;padding:10px;border:1px solid #ccc;margin:0 auto;}
 
</style>
