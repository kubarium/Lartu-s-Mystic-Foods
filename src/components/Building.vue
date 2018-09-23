<template>
  <div class="building">
    <header class="controls">
      <game-title class="game-title" />
      <kitchen class="kitchen" />
      <inventory/>
      <actions class="actions" />
    </header>
    <div class="floor">
      <floor/>
      <customers/>
    </div>
    <div class="left-wall"></div>
    <div class="bottom-wall"></div>
    <div class="right-wall"></div>
  </div>
</template>

<script>
import Actions from "@/components/Actions.vue";
import Kitchen from "@/components/Kitchen.vue";
import Inventory from "@/components/Inventory.vue";
import GameTitle from "@/components/GameTitle.vue";
import Floor from "@/components/Floor.vue";
import Customers from "@/components/Customers.vue";
export default {
  name: "Building",
  components: {
    Inventory,
    GameTitle,
    Kitchen,
    Actions,
    Floor,
    Customers
  }
};
</script>

<style scoped>
.building {
  max-width: 960px;
  max-height: 720px;
  width: 100%;
  height: 100ch;
  /* position: absolute; */
  display: grid;
  grid-template-rows: 240px auto 32px;
  grid-template-columns: [wall] 32px [floor] 1fr [wall] 32px;
  background: url("../assets/floor.jpg") bottom center;
  outline: 1px solid blue;
}
header {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  height: 220px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: [kitchen] 200px [counter] 440px [actions] 200px;
  grid-template-rows: 110px auto;
}
.game-title {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  margin: -5px auto -10px auto;
}
.kitchen {
  grid-column: 1 / 2;
  margin: 5px 0 0 15px;
}
.actions {
  margin: 5px 15px 0 0px;
}
.counter {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
.floor {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  position: relative;
}
.left-wall {
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  background: url("../assets/left-wall.jpg") no-repeat;
  width: 32px;
  height: 100%;
}
.bottom-wall {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  background: url("../assets/bottom-wall.png");
  height: 32px;
  width: 100%;
}
.right-wall {
  grid-column: 3 / 4;
  grid-row: 1 / 4;
  background: url("../assets/right-wall.jpg");
  width: 32px;
  height: 100%;
}
</style>
