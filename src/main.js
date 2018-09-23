import Vue from 'vue'
import App from './App.vue'
//import router from './router'
import store from './store'
import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/css/index.css';
import "bulma"
import "./fontawesome"
Vue.config.productionTip = false
Vue.use(Tooltip);

//Vue.$game = new Game()
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
