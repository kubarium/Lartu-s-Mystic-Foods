<template>
  <div class="building">
    <div class="controls">
      <game-title class="game-title" />
      <span class="sprite counter" />
    </div>
    <div class="floor">
      <floor/>
    </div>
    <div class="left-wall"></div>
    <div class="bottom-wall"></div>
    <div class="right-wall"></div>
  </div>
</template>

<script>
import GameTitle from "@/components/GameTitle.vue";
import Floor from "@/components/Floor.vue";
export default {
  name: "Building",
  components: {
    GameTitle,
    Floor
  }
};
</script>

<style>
.building {
  max-width: 960px;
  max-height: 720px;
  width: 100%;
  height: 100ch;
  outline: 1px solid yellow;
  /* position: absolute; */
  display: grid;
  grid-template-rows: 220px auto 32px;
  grid-template-columns: [wall] 32px [floor] 1fr [wall] 32px;
  background: url("../assets/floor.jpg");
}
.controls {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  height: 220px;
  display: grid;
  grid-template-columns: [space] 1fr [counter] 440px [space] 1fr;
  grid-template-rows: 110px auto;
}
.game-title {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  margin: -5px auto 0 auto;
}
.counter {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
.floor {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
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
  background: url("../assets/bottom-wall.jpg");
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
