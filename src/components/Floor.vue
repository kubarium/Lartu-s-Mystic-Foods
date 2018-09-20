<template>
  <div class="floor">
    <div class="floorElement" :class="floorElement(tile)" v-for="tile in 28*17" @dragover="dragover" @drop="drop" :key="tile">{{debug?tile:""}}</div>
  </div>
</template>

<script>
import floorplan from "@/data/floorplan.json";
export default {
  name: "Floor",
  props: {
    msg: String
  },
  data() {
    return {
      debug: true,
      floorplan
    };
  },
  created() {},
  methods: {
    dragover(event) {
      //console.log(event);
    },
    drop(event) {
      console.log(event);
    },
    floorElement(tile) {
      var sprites = {};
      Object.keys(floorplan).forEach(sprite => {
        if (floorplan[sprite].includes(tile)) sprites[sprite] = true;
      });
      if (Object.values(sprites).length) {
        Object.assign(sprites, { sprite: true });
      }
      return sprites;
    }
  },
  computed: {}
};
</script>
<style src="@/assets/styles.css"></style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$grid: 32px;
$padding: 0px;
.floor {
  display: grid;
  padding: $padding;
  grid-template-columns: repeat(28, $grid);
}
.floorElement {
  width: $grid;
  height: $grid;
  outline: 1px dashed rgba($color: red, $alpha: 0.2);
}
</style>
