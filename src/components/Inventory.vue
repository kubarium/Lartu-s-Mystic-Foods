<template>
    <div class="">
        <!-- <button class="button" v-tooltip="{html:'food'}">Sikert
            <food name="Fire-Roasted Carrots & Ginger Alligator" id="food" :ingredients="{eggs: 3,seafood: 1,meat:2}" :cost="{gold:31,silver:10,copper:1}"/></button> -->
        <!-- 
        <food name="Barbecued Grouse" :ingredients="{
      vegetables: 3,
      spices: 1,nuts:2
    }" :cost="{gold:131,silver:0,copper:13}" /> -->
        <button class="button" v-tooltip="{html:`food-${index}`, delay: 50}" v-for="(food,index) in $store.state.inventory" :key="food.name" @dragstart="dragstart(food)" draggable>
            <food :id="`food-${index}`" :name="food.name" :ingredients="food.ingredients" :equipment="food.equipment" />{{index}}</button>
    </div>
</template>

<script>
import Food from "./Food.vue";

export default {
  created() {
    this.$store.commit("createDish");
    //console.log(this.$store.getters.listOfAvailableDishes);
  },
  components: {
    Food
  },
  data() {
    return {
      //foods: this.$store.getters.listOfAvailableDishes
      //foods:  [...new Array(5)].map(index => new FoodItem("sick"))
    };
  },methods:{
      dragstart(food){
          console.log(food)
      }
  }
};
</script>

<style lang="scss">
</style>
