<template>
  <div id="app">
    <CurrentOrder msg="Hello Vue in CodeSandbox!" />
  </div>
</template>

<script>
import CurrentOrder from "./components/CurrentOrder";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: {
    CurrentOrder,
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
