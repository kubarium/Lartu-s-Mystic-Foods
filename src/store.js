import Vue from 'vue'
import Vuex from 'vuex'
import foods from "./foods.json";
import {Food as FoodItem, Inventory} from "./Inventory";
import {Purse, Gold} from "./Purse";
//Inventory.Create();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {
      isPlaying: false
    },
    player: {
      wealth: new Purse(1201679)
    },
    foods,
    equipment: {
      pan: true,
      pot: false,
      firepit: false,
      oven: false
    },
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
    },
    changeWealth(state, change) {
      state.player.wealth = change >= 0
        ? state
          .player
          .wealth
          .Add(change)
        : state
          .player
          .wealth
          .Remove(-change)
    }
  },
  actions: {}
})
