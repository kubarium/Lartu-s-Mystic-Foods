<template>
  <div>
    <h1 class="title has-text-white is-6">Kitchen</h1>
    <section class="kitchen">
      <section class="cooking">
        <progress class="progress is-small" :value="$store.state.cookingProgress" max="100" />
      </section>

      <section v-for="(equipment, index) in this.$store.state.kitchen" :title="equipment.name" :key="index" class="equipment">
        <span :class="[equipment.condition==0?`${equipment.name}-off`:`${equipment.name}-on`]" class="sprite" />
        <progress class="progress is-small" :value="equipment.condition" max="100"></progress>
        <button class="button is-small" :disabled="equipment.condition>0">
          <font-awesome-icon icon="cart-plus" />
        </button>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Kitchen",
  created() {
    console.log(this.$store.state.player.wealth.isEmpty());
  },
  data() {
    return {};
  },
  computed: {
    wealth: function() {
      return this.$store.state.player.wealth.normalize();
    }
  }
};
</script>
<style lang="scss" scoped>
div {
  max-width: 200px;
  height: 215px;
  background: #f6f6f6;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-weight: bold;
  padding: 10px 0 0px;
}
h1 {
  background: #b31f1f;
  line-height: 30px;
  max-height: 30px;
  padding: 0 10px;
  margin-right: 15%;
  vertical-align: middle;
  position: relative;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
h1::before {
  content: url("../assets/stylish-header-left.png");
  position: absolute;
  left: -10px;
}
.cooking {
  padding: 5px 10px;
}
.equipment {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 5px;
  margin: 5px;
}

.equipment .progress {
  margin: 0;
}
</style>
