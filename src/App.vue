<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import DevicePixelRatio from "./devicePixelRatio.js";
export default {
  name: "app",
  components: {},
  created() {
    new DevicePixelRatio().init();
  },
  created() {
    new DevicePixelRatio().init();
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  color: #2c3e50;
}
</style>
