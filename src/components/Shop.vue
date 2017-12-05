<template>
  <div class="content">
    <table cell-spacing="0">
      
      <thead>
        <th></th>
        <th></th>
        <th>商品名称</th>
        <th>商品单价</th>
        <th>购买数量</th>
        <th>操作</th>
      </thead>
      
      <tbody>
        <tr v-for="(item, index) in list">
          <td>{{ index + 1 }}</td>
          <td><img :src="item.img" alt=""></td>
          <td>{{ item.name }}</td>
          <td>{{ item.price}}</td>
          <td>
            <button
              @click="handleReduce(index)"
              :disabled="item.count === 1">-</button>
            {{ item.count }}
            <button
              @click="handleAdd(index)">+</button>
          </td>
          <td>
            <button
              @click="handleRemove(index)">删除</button>
          </td>
        </tr>
      </tbody>
 
    </table>
    
    <div class="total-price">
      总价: ¥ {{totalPrice}}
    </div>

  </div>
</template>

<script>
export default {
  name: 'shop',
  data () {
    return {
      list : [
        { 
          id: 1,
          img: require('@/assets/images/mi-jhq.jpg'),
          name : '小米空气净化器2 ',
          price : 699,
          count : 1
        },
        { 
          id: 2,
          img: require('@/assets/images/mi-jqr.jpg'),
          name : '米家扫地机器人',
          price : 1499,
          count : 1
        },
        { 
          id: 3,
          img: require('@/assets/images/mi-dfb.png'),
          name : '米家电饭煲',
          price : 599,
          count : 1
        }
      ]
    }
  },
  computed: {
    totalPrice: function(){
      var total = 0;
      for (var i = 0; i < this.list.length; i++){
        var item = this.list[i];
        total += item.price * item.count;
      }

      return total; 
    }
  },
  methods: {
    handleReduce: function(index){
      if(this.list[index].count === 1) return;
      this.list[index].count--;
    },
    handleAdd: function(index){
      this.list[index].count++;
    },
    handleRemove: function(index){
      this.list.splice(index, 1);
    }
  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  width:800px;
  margin:0 auto;
/*  border:1px solid red;*/
}
.content th,.content td{border:1px solid #ccc;padding:10px 20px;}
.content table{border:1px solid #ccc;border-spacing:0;border-collapse: collapse;}
.total-price{padding:10px 20px;text-align: left;}
</style>
