<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png" /> <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      list: [
        { id: 1, name: "Chicago Bulls", desc: "芝加哥公牛", disabled: true },
        { id: 2, name: "Cleveland Cavaliers", desc: "克里夫兰骑士" }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
