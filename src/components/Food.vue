<template>
  <div class="food">
    <h1 class="title is-6">
      <span v-html="name.replace('&','&<br/>')" />
    </h1>
    <div class="ingredients">
      <span v-for="(quantity, ingredient) in ingredients" :title="ingredient" :key="ingredient" class="ingredient">
        <span :class="`${ingredient}`" class="sprite ingredient-pic" /> {{quantity}}
      </span>
    </div>
    <div class="cost">
      <span v-for="(value, coin) in cost" :title="coin" :key="coin" class="coin">
        <span :class="`${coin}`" class="sprite coin-pic" /> {{value}}
      </span>
    </div>
  </div>
</template>

<script>
import SpoilProgress from "./SpoilProgress.vue";
export default {
  props: ["ingredients", "equipment", "name"],
  data() {
    return {
      cost: { gold: 131, silver: 0, copper: 13 }
      //Math.pow(this.numOfOrdinaryIngredients + this.numOfExoticIngredients, (1 + this.numOfExoticIngredients) * ((11 + this.numOfEquipment) / 10) * 1.2)
    };
  },
  components: {
    SpoilProgress
  }
};
</script>

<style lang="scss" scoped>
.food {
  border-radius: 3px;
  background: #f6f6f6;
  border: 1px solid #d9d9d9;
  width: 300px;
  height: 200px;
  font-family: "Merriweather", cursive;
  font-weight: bold;
  color: #333333;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
}
h1.title {
  background: url("../assets/sash.png") no-repeat;
  height: 78px;
  color: #ffffff;
  line-height: 22px;
  padding: 10px 55px 15px 25px;
  margin-left: -20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0;
}
.ingredients,
.cost {
  padding: 0 15px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 90px);
  align-items: center;
}
.ingredient-pic,
.coin-pic {
  margin: 11px;
  vertical-align: middle;
}
</style>
