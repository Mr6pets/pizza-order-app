<template>
  <h1>Admin</h1>
</template>
<script>
export default {
  data() {
    return {
      name: "alvis"
    };
  },
  beforeRouterEnter: (to, from, next) => {
    alert("hello" + this.name);
  }
};
</script>