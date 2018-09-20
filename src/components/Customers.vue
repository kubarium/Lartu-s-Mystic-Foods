<template>
  <div class="customers">
    <div class="customer" :class="{'table-vertical-top':customers.includes(tile)}" v-for="tile in 28*17" @dragover="dragover" @drop="drop" :key="tile">{{tile}}</div>
  </div>
</template>

<script>
import floorplan from "@/data/floorplan.json";
export default {
  name: "Customers",
  props: {
    msg: String
  },
  data() {
    return {
      floorplan,
      customers: [100, 121, 133, 44, 161, 149]
    };
  },
  methods: {
    dragover(event) {
      //console.log(event);
    },
    drop(event) {
      console.log(event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  outline: 1px solid red;
}
.chair {
  background: red;
}
.table-top-left {
}
</style>
