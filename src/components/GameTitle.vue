<template>
  <div>
    <h1 class="title has-text-white has-text-centered">Lartu’s Mystic Foods Emporium</h1>
    <p class="player-wealth">
      <span v-for="(value, coin) in wealth" :title="coin" :key="coin" class="coin">
        <span :class="`${coin}`" class="sprite coin-pic" /> {{value}}
      </span>
      <button class="button is-primary">
        <span class="icon">
          <i class="fas fa-play" />
        </span>
      </button>
      <button class="button is-info">
        <span class="icon">
          <i class="fas fa-question" />
        </span>
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "GameTitle",
  created() {},
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
  max-width: 340px;
  background: #f6f6f6;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-weight: bold;
  padding-top: 10px;
}
h1 {
  background: #b31f1f;
  line-height: 30px;
  max-height: 30px;
  padding: 0 10px;
  font-family: "Pacifico", sans-serif;
  font-weight: normal;
  font-size: 18px;
  position: relative;
}
h1:after {
  content: url("../assets/stylish-header-right.png");
  position: absolute;
  right: -10px;
}
h1:before {
  content: url("../assets/stylish-header-left.png");
  position: absolute;
  left: -10px;
}
.player-wealth {
  padding: 0 5px;
  display: grid;
  grid-auto-flow: column;
}
.player-wealth > * {
  margin: 0 4px;
}
.coin-pic {
  margin: 0 5px;
  vertical-align: middle;
}
</style>
