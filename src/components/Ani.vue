<template>
  <div class="content">
    <h3>DOM TYPE use animejs</h3>
    <div id="num-wrap">
      <input class="text-output" disabled value="0">
      <button 
      @click="numPlay">数字跳动</button>
    </div>

    <h3>OBJ TYPE use animejs</h3>
    <div class="box" :style="styles"></div>
    <button 
      @click="play">播放</button>

    
   

  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'ani',
  data () {
    return {
     styles: {
      position: 'absolute',
      left: 0
     },
    }
  },
  mounted:function(){
  },
  methods: {
    numPlay: function(){
      anime({
        targets: '#num-wrap input',
        value: 1000,
        round: 1,
        easing: 'easeInOutExpo',
        duration: 1500
      });
    },
    play: function(){
      anime({
        targets: this.styles,
        left: '100px',
        round: 1,
        easing: 'linear',
        update: function() {
          // var el = document.querySelector('#JSobject pre');
          // el.innerHTML = JSON.stringify(obj);
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#num-wrap input{border:none;width:100%;background-color: #fff;color:#a00000;font-size:60px;text-align: center;}
.box{width:80px;height:80px;background-color: #f8ac01;}
</style>
