<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 引入组件
import Header from "./components/Header";
export default {
  components: {
    //注册组件
    "app-header": Header
  }
};
</script>
<style>
</style>
