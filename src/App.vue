<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <first-page></first-page>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import FirstPage from "./components/FirstPage.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    FirstPage
  }
};
</script>

<style>
#app {
  margin-top: 40px;
}
</style>
