<template>
  <div class="customers">
    <div class="customer" :class="{occupied:customers.includes(tile)}" v-for="tile in 28*15" @dragover="dragover" @drop="drop" :key="tile">{{tile}}</div>
  </div>
</template>

<script>
export default {
  name: "Customers",
  props: {
    msg: String
  },
  data() {
    return {
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
$padding: 32px;
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
.occupied {
  background: red;
}
</style>
