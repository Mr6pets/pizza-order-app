<template>
  <div class="row mt-3">
    <div class="col-md-3 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../../src/assets/icon.png" alt />
          <form @submit.prevent="onSubmit">
            <div class="from-group">
              <label for="emial">邮箱</label>
              <input type="emial" class="form-control" v-model="emial" />
            </div>
            <div class="from-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password" />
            </div>
            <button class="btn btn-block btn-success mt-3">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      emial: "",
      password: ""
    };
  },
  //组件内的守卫
  beforeRouteEnter(to, from, next) {
    next(vm => vm.$store.dispatch("setUser", null));
  },
  methods: {
    onSubmit() {
      axios.get("/users.json").then(res => {
        // console.log(res);
        const data = res.data;
        const users = [];
        for (let key in data) {
          const user = data[key];
          // console.log(user);
          users.push(user);
        }
        //实现过滤
        let result = users.filter(user => {
          return user.emial == this.emial && user.password == this.password;
        });
        // console.log(result); //符合条件 筛选出了正确的数组[0: {confirmPassword: "123456", emial: "test@test.com", password: "123456"}]
        //判断result的长度大于0
        if (result != null && result.length > 0) {
          this.$store.dispatch("setUser", result[0].emial);
          this.$router.push({ name: "homeLink" });
        } else {
          alert("账号或密码错误");
          this.$store.dispatch("setUser", null);
        }
      });
    }
  }
};
</script>