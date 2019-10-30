<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>wwelcome alvis's pizza 点单平台</h1>
        <h2>这里有你非常喜欢的pizza</h2>
        <button @click="goToMenu" class="btn btn-success">let's order</button>
      </div>
    </div>
    <h1>Home</h1>
    <!-- button  上加上 @click="goToMenu" -->
    <!--  -->
  </div>
</template>
<script>
export default {
  methods: {
    goToMenu() {
      //   //跳转到上一次浏览的位置
      //   // this.$router.go(-1);
      //   //指定跳转地址
      //   // this.$router.replace("/menu");
      //   //指定跳转路由的名字下
      //   // this.$router.replace({ name: "menuLink" });
      //   //通过push到指定的路由下
      //   // this.$router.push("/menu");
      this.$router.push({ name: "menuLink" });
    }
  }
};
</script>
<style>
#home {
  background: url("../../src/assets/pizza.jpg");
  height: 85vh;
  padding: 10%;
}
h1,
h2 {
  margin: 6%;
}
.background {
  background: #eee;
  opacity: 0.7;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>