<template>
  <div class="sprite counter inventory-items">

    <button class="inventory-item" v-tooltip="{html:`food-${index}`, delay: 50}" v-for="(food,index) in $store.state.inventory.slice(0,7)" :key="food.name" @dragstart="dragstart(food)" draggable>
      {{food.name | initials}}
      <progress class="progress is-small" value="15" max="100">15%</progress>

      <food :id="`food-${index}`" :name="food.name" :ingredients="food.ingredients" :equipment="food.equipment" />
    </button>
  </div>
</template>

<script>
import Food from "./Food.vue";

export default {
  created() {
    //this.$store.commit("createDish");
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
  },
  methods: {
    dragstart(food) {
      //console.log(food);
    }
  },
  filters: {
    initials: function(value) {
      return value
        .replace("&", "")
        .replace("-", " ")
        .split(" ")
        .map(word => word[0])
        .join("");
    }
  }
};
</script>

<style lang="scss" scoped>
.inventory-items {
  display: flex;
  grid-auto-flow: column;
  align-items: flex-end;
  justify-content: center;
}
.inventory-item {
  width: 56px;
  height: 56px;
  margin: 0 3px 2px 3px;
}
</style>
