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
  grid-template-areas:
    "left-wall counter right-wall"
    "left-wall floor right-wall"
    "left-wall bottom-wall right-wall";
  grid-template-rows: 1fr 140px 1fr;
  grid-template-columns: 1fr 32px 1fr;
  background: url("../assets/floor.jpg");
}
.counter {
  grid-area: "counter";
  width: calc(100% - 32px - 32px);
  height: 40px;
  background: red;
}
.floor {
  grid-area: "floor";
}
.left-wall {
  grid-area: "left-wall";
  outline: 1px solid lightgreen;
  background: url("../assets/left-wall.jpg");
  width: 32px;
  height: 100%;
}
.bottom-wall {
  grid-area: "bottom-wall";
  outline: 1px solid burlywood;
  background: url("../assets/bottom-wall.jpg");
  height: 32px;
  width: 100%;
}
.right-wall {
  grid-area: "right-wall";
  outline: 1px solid red;
  background: url("../assets/right-wall.jpg");
  width: 32px;
  height: 100%;
}
</style>
