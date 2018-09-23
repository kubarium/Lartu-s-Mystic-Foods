<template>
  <div>
    <h1 class="title has-text-white has-text-centered">Lartu’s Mystic Foods Emporium</h1>
    <p class="controls">
      <button class="button is-primary" @click="$store.commit('toggleGame')">
        <font-awesome-icon icon="play" v-if="$store.state.game.isPlaying" />
        <font-awesome-icon icon="pause" v-else/>
      </button>
      <span v-for="(value, coin) in wealth" :title="coin" :key="coin" class="coin">
        <span :class="`${coin}`" class="sprite coin-pic" /> {{value}}
      </span>
      <button class="button is-info">
        <font-awesome-icon icon="question" />
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "GameTitle",
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
  width: 340px;
  height: 220px;
  background: #f6f6f6;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-weight: bold;
  padding-top: 10px;
}
h1 {
  background: #b31f1f;
  line-height: 40px;
  max-height: 40px;
  padding: 0 10px;
  font-family: "Pacifico", sans-serif;
  font-weight: normal;
  font-size: 18px;
  position: relative;
}
h1:after {
  content: url("../assets/stylish-header-tall-right.png");
  position: absolute;
  right: -10px;
}
h1:before {
  content: url("../assets/stylish-header-tall-left.png");
  position: absolute;
  left: -10px;
}
.controls {
  padding: 0 5px;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  clear: both;
}
.controls > * {
  margin: 0 4px;
}
.coin-pic {
  margin: 0 5px;
  vertical-align: middle;
}
</style>
