<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="py-2" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="d-block mx-auto"
          role="img"
          viewBox="0 0 24 24"
          focusable="false"
        >
          <title>Product</title>
          <circle cx="12" cy="12" r="10" />
          <path
            d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"
          />
        </svg>
      </a>
      <a href="/" class="navbar-brand">Pizza点餐系统</a>
      <ul class="navbar-nav">
        <!-- <li>
          <router-link tag="div" to="/" class="nav-link">主页</router-link>
        </li>
        <li>-->
        <!-- <li>
          <router-link :to="homeLink" class="nav-link">主页</router-link>
        </li>-->
        <li>
          <router-link :to="{name:'homeLink'}" class="nav-link">主页</router-link>
        </li>
        <li>
          <router-link :to="{name:'menuLink'}" class="nav-link">菜单</router-link>
        </li>
        <li>
          <router-link :to="{name:'adminLink'}" class="nav-link">管理</router-link>
        </li>
        <li>
          <router-link :to="{name:'aboutLink'}" class="nav-link">关于我们</router-link>
        </li>
      </ul>
      <!-- 登录注册 -->
      <ul class="navbar-nav ml-auto">
        <li>
          <router-link :to="{name:'loginLink'}" class="nav-link">登录</router-link>
        </li>
        <li>
          <router-link :to="{name:'registerLink'}" class="nav-link">注册</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
</style>
