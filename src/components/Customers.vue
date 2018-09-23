<template>
  <div class="customers">
    <customer  :customer="customer" v-for="customer in $store.state.customers" @dragover="dragover" @drop="drop" :key="customer.tile"/>
  </div>
</template>

<script>
import Customer from "./Customer.vue"
export default {
  name: "Customers",
  props: {},
  components:{
    Customer
  },
  data() {
    return {};
  },
  methods: {
    dragover(event) {
      //console.log(event);
    },
    drop(event) {
      console.log(event);
    },
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$grid: 32px;
$padding: 0px;
.customers {
  padding: $padding;
  height: $grid * 13;
  position: relative;
}
/* .customer {
  width: $grid;
  height: $grid;
  position: absolute;
} */
</style>
