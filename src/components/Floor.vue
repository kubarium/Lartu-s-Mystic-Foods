<template>
    <div class="customers">
        <div class="customer" :class="floorElement(tile)" v-for="tile in 28*17" @dragover="dragover" @drop="drop" :key="tile">{{tile}}</div>
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
      floorplan,
      customers: [100, 121, 133, 44, 161, 149]
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
<style src="@/assets/styles.css">
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//@import url("../assets/styles.css");
$grid: 32px;
$padding: 0px;
.customers {
  display: grid;
  padding: $padding;
  grid-template-columns: repeat(28, $grid);
}
.customer {
  width: $grid;
  height: $grid;
  outline: 1px dashed rgba($color: red, $alpha: 0.2);
} /* 
.chair-1-top {
  background: url("../assets/chair-1-top.png");  
}
.chair-1-right {
  background: url("../assets/chair-1-right.png");  
}
.chair-1-bottom {
  background: url("../assets/chair-1-bottom.png");  
}
.chair-1-top {
  background: url("../assets/chair-1-top.png");  
}
.table-top-left {
  background: url("../assets/table-top-left.png");
}
.table-top-right {
  background: url("../assets/table-top-right.png");
}
.table-bottom-left {
  background: url("../assets/table-bottom-left.png");
}
.table-bottom-right {
  background: url("../assets/table-bottom-right.png");
}
.table-vertical-top {
  background: url("../assets/table-vertical-top.png");
}
.table-vertical-bottom {
  background: url("../assets/table-vertical-bottom.png");
}
.table-horizontal-left {
  background: url("../assets/table-horizontal-left.png");
}
.table-horizontal-right {
  background: url("../assets/table-horizontal-right.png");
} */
</style>
