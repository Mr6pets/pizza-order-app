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
  methods: {
    onSubmit() {}
  }
};
</script>