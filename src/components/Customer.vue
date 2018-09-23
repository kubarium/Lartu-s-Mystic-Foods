<template>
    <div class="customer sprite" :class="`customer-${customer.satisfaction}`" :style="seatCustomer(customer.tile)"/>
</template>

<script>
export default {
  name: "Customer",
  props: ["customer"],
  data() {
    return {};
  },
  methods: {seatCustomer(tile) {
      var row = tile % 28 - 1;
      var column = Math.floor(tile / 28);
      return { left: `${row * 32}px`, top: `${column * 32}px` };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$grid: 32px;
$padding: 0px;
.customer {
  width: $grid;
  height: $grid;
  position: absolute;
}
</style>
