<template>
  <div id="app">
    <building/>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Building from "@/components/Building.vue";
export default {
  components: {
    Building
  },
  methods: {
    pause(event) {
      if (event.charCode == 32) {
        event.preventDefault();
        this.$store.commit("toggleGame");
      }
    },
    update(delta) {
      console.log(delta);
    }
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
  },
  created() {
    //this.$store.state.MainLoop.setUpdate(this.update).start();
    //context.state.MainLoop.setUpdate(this.update).start();
    console.log("created");

    //var purse = new Purse(200);

    //purse.value =      purse + new Gold(1) + new Silver(12) + new Copper(13) - new Copper(60);
    /* purse.Add(new Gold(1));
    purse.Add(new Silver(12));
    purse.Add(new Copper(13)); */
    document.addEventListener("keypress", this.pause);
  }
};
</script>
<style src="@/assets/styles.css"></style>


<style lang="scss">
#app {
  margin: 0 auto;
  outline: 1px solid blue;
  max-width: 960px;
  font-family: "Merriweather", sans-serif;
}
div.vue-tooltip {
  background-color: transparent;
  box-shadow: none;
  -webkit-box-shadow: none;
}
.tooltip-arrow {
  display: none;
}
</style>
