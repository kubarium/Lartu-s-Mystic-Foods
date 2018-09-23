import Vue from 'vue'
import Vuex from 'vuex'
import foods from "@/data/foods.json";
import floorplan from "@/data/floorplan.json";
import {Food as FoodItem, Inventory} from "@/controllers/Inventory";
import {Customer, SatisfactionType} from "@/controllers/Customer";
import {Purse, Gold, Silver} from "@/controllers/Purse";
import Mainloop from "mainloop.js"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    debug: false,
    foods,
    floorplan,
    Mainloop,
    game: {
      started: false,
      isRunning: false
    },
    player: {
      wealth: new Purse()
    },
    cookingProgress: 0,
    kitchen: [
      {
        name: "pan",
        condition: 100,
        cost: 20 * new Gold()
      }, {
        name: "spit",
        condition: 0,
        cost: 20 * new Gold() + 10 * new Silver()
      }, {
        name: "pot",
        condition: 0,
        cost: 30 * new Gold() + 20 * new Silver()
      }, {
        name: "oven",
        condition: 0,
        cost: 50 * new Gold() + 40 * new Silver()
      }
    ],
    customers: [
      new Customer(96),
      new Customer(235, SatisfactionType.HAPPY),
      new Customer(155),
      new Customer(47),
      new Customer(105),
      new Customer(312),
      new Customer(228)
    ],
    inventory: []
  },
  getters: {
    listOfAvailableDishes: (state) => state
      .foods
      .filter(food => {
        return state
          .kitchen
          .filter(equipment => equipment.condition > 0)
          .map(equipment => equipment.name)
          .includes(food.equipment[0])
      }),
    listOfAvailableSeats: (state) => state.floorplan
  },
  mutations: {
    createDish(state) {
      state.inventory = this.getters.listOfAvailableDishes
    },
    customerLeaves(state, tile) {
      state.customers = state
        .customers
        .filter((customer) => customer.tile != tile)
    },
    customerArrives(state) {
      state.customers = state
        .customers
        .filter((customer) => customer.tile != tile)
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
    },
    toggleGame(state) {
      state.game.started = true;
      state.game.isRunning = !state.game.isRunning
      state.game.isRunning
        ? state
          .Mainloop
          .start()
        : state
          .Mainloop
          .stop()
    },
    cook(state, delta) {
      state.cookingProgress += delta / 100
    }
  },
  actions: {
    openRestaurant(context) {
      context
        .state
        .Mainloop
        .setUpdate((delta) => context.commit('cook', delta))
        .start();
      console.log((context.state.Mainloop))
      /*
      setInterval(() => {
        context.commit('createDish')
      }, 3000) */
    }
  }
})
