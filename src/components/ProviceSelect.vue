<template>
  <div class="content">
   <select v-model="selPro">
    <option disabled value="">请选择</option>
    <option v-for="item in proData" :value="item.pk">
      {{item.pv}}
    </option>
   </select>
   省

   <select v-model="selCity">
    <option disabled value="">请选择</option>
    <option v-for="item in cityRes" :value="item.ck">
      {{item.cv}}
    </option>
   </select>
   市

   <select v-model="selCountry">
    <option disabled value="">请选择</option>
    <option v-for="item in countryRes" :value="item.cyk">
      {{item.cyv}}
    </option>
   </select>
   区

  </div>
</template>

<script>
import {proData_, cityData_, countryData_} from '../assets/procityCountry.js';

export default {
  name: 'ProviceSelect',
  data () {
    return {
      proData: proData_,
      cityData: cityData_,
      countryData: countryData_,
      selPro:'',
      selCity: '',
      selCountry: ''
    }
  },
  computed: {
    cityRes: function() {
      var self = this;
      return this.cityData.filter(function(item){
        return item.pk == self.selPro;
      })
    },
    countryRes: function(){
      var self = this;
      return this.countryData.filter(function(item){
        return item.ck == self.selCity;
      })
    }

  }
 
  
}
</script>

<style scoped>

</style>
