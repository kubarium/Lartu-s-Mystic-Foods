<template>
  <div class="building">
    <div class="counter"></div>
    <div class="floor">
      <floor/>
    </div>
    <div class="left-wall"></div>
    <div class="bottom-wall"></div>
    <div class="right-wall"></div>
  </div>
</template>

<script>
import Floor from "@/components/Floor.vue";
export default {
  name: "Building",
  components: {
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
  grid-template-rows: 140px auto 32px;
  grid-template-columns: [wall] 32px [floor] 1fr [wall] 32px;
  background: url("../assets/floor.jpg");
}
.counter {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  height: 140px;
  background: red;
}
.floor {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}
.left-wall {
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  background: url("../assets/left-wall.jpg");
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
