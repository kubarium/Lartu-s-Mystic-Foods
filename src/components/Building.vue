<template>
  <div class="building">
    <div class="counter"></div>
    <div class="floor"></div>
    <div class="left-wall"></div>
    <div class="bottom-wall"></div>
    <div class="right-wall"></div>
  </div>
</template>

<script>
export default {
  name: "Building"
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
  /* grid-template-areas:
    "left-wall counter right-wall"
    "left-wall floor right-wall"
    "left-wall bottom-wall right-wall"; */
  grid-template-rows: 140px auto 32px;
  grid-template-columns: [wall] 32px [floor] 1fr [wall] 32px;
  background: url("../assets/floor.jpg");
}
.counter {
  grid-area: "counter";
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  height: 140px;
  background: red;
}
.floor {
  grid-area: "floor";
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background: blue;
}
.left-wall {
  grid-area: "left-wall";
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  outline: 1px solid lightgreen;
  background: url("../assets/left-wall.jpg");
  width: 32px;
  height: 100%;
}
.bottom-wall {
  grid-area: "bottom-wall";
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  outline: 1px solid burlywood;
  background: url("../assets/bottom-wall.jpg");
  height: 32px;
  width: 100%;
}
.right-wall {
  grid-area: "right-wall";
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  outline: 1px solid red;
  background: url("../assets/right-wall.jpg");
  width: 32px;
  height: 100%;
}
</style>
