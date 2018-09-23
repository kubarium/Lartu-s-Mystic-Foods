<template>
  <div class="wealth">
    <h1 class="title has-text-white is-6 has-text-right">Actions</h1>
    <p class="is-size-7">Tableside Manners</p>
    <!-- <p class="player-wealth">
      <span v-for="(value, coin) in wealth" :title="coin" :key="coin" class="coin">
        <span :class="`${coin}`" class="sprite coin-pic" /> {{value}}
      </span>
    </p> -->
  </div>
</template>

<script>
export default {
  name: "Actions",
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
.wealth {
  max-width: 200px;
  height: 215px;
  background: #f6f6f6;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-weight: bold;
  padding: 10px 0 10px;
}
h1 {
  background: #b31f1f;
  line-height: 30px;
  max-height: 30px;
  padding: 0 10px;
  margin-left: 15%;
  vertical-align: middle;
  position: relative;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
h1:after {
  content: url("../assets/stylish-header-right.png");
  position: absolute;
  right: -10px;
}

.player-wealth {
  padding: 0 15px;
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: repeat(3, 50px);
  align-items: center;
}
.coin-pic {
  margin: 10px;
  vertical-align: middle;
}
</style>
