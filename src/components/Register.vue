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
            <div class="from-group">
              <label for="password">确认密码</label>
              <input type="confirmPassword" class="form-control" v-model="confirmPassword" />
            </div>
            <button class="btn btn-block btn-success mt-3">注册</button>
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
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.password == this.confirmPassword) {
        const formData = {
          emial: this.emial,
          password: this.password,
          confirmPassword: this.confirmPassword
        };
        axios
          .post("/users.json", formData)
          .then(res => {
            // console.log(res);
            this.$router.push({ name: "loginLink" });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        alert("两次密码不一致");
      }
    }
  }
};
</script>