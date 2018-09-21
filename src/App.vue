<template>
  <div id="app">
    <building/>
    <div class="panel">
      <div class="panel-heading">
        Lartu's Mystic Foods Emporium
      </div>
      <div class="panel-block">

      </div>
    </div>
    <inventory/>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Inventory from "@/components/Inventory.vue";
import Wealth from "@/components/Wealth.vue";
import Equipment from "@/components/Equipment.vue";
import Building from "@/components/Building.vue";
import { Purse, Gold, Copper, Silver } from "./Purse";
export default {
  components: {
    Inventory,
    Building,
    Wealth,
    Equipment
  },
  created() {
    var purse = new Purse(200);

    //purse.value =      purse + new Gold(1) + new Silver(12) + new Copper(13) - new Copper(60);
    /* purse.Add(new Gold(1));
    purse.Add(new Silver(12));
    purse.Add(new Copper(13)); */
    console.log(purse.normalize());
  }
};
</script>
<style src="@/assets/styles.css"></style>


<style lang="scss">
#app {
  margin: 0 auto;
  outline: 1px solid blue;
  max-width: 960px;
  font-family: "Merriweather", sans-serif;
}
div.vue-tooltip {
  background-color: transparent;
  box-shadow: none;
  -webkit-box-shadow: none;
}
.tooltip-arrow {
  display: none;
}
</style>
