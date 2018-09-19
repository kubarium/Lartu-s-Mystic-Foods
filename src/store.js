import Vue from 'vue'
import Vuex from 'vuex'
import foods from "./foods.json";
import {Food as FoodItem, Inventory} from "./Inventory";
//Inventory.Create();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {
      isPlaying: false
    },
    foods,
    equipment: {
      pan: true,
      pot: false,
      firepit: false,
      oven: false
    },
    sik: this,
    inventory: []
  },
  getters: {
    listOfAvailableDishes: (state) => state
      .foods
      .filter(food => state.equipment[food.equipment[0]])
  },
  mutations: {
    createDish(state) {

      state.inventory = this.getters.listOfAvailableDishes
    }
  },
  actions: {}
})
