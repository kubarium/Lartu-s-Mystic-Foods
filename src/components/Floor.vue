<template>
  <div>
    <span class="floorElement" :class="floorElement(tile)" v-for="tile in 28*13" :key="tile">{{$store.state.debug?tile:""}}</span>
  </div>
</template>

<script>
import floorplan from "@/data/floorplan.json";
export default {
  name: "Floor",
  props: {},
  data() {
    return {
      floorplan
    };
  },
  created() {},
  methods: {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$grid: 32px;
$padding: 0px;
$debug: 0px;
div {
  display: grid;
  padding: $padding;
  position: absolute;
  grid-template-columns: repeat(28, $grid);
}
.floorElement {
  width: $grid;
  height: $grid;
  outline: $debug dashed rgba($color: red, $alpha: 0.2);
}
</style>
