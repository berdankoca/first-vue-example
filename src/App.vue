<template>
  <div id="app" class="container-fluid">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="row">
      <div class="col-md-3">
        <nav-menu params="route: route"></nav-menu>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu";

export default {
  name: "app",
  components: {
    NavMenu
  }
};
</script>

<style>
#app {
  margin-top: 40px;
}
</style>
