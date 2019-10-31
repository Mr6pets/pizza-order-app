<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead>
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import NewPizza from "./NewPizza.vue";
export default {
  data() {
    return {
      getMenuItems: []
    };
  },
  components: {
    "app-new-pizza": NewPizza
  },
  created() {
    fetch("https://pizza-app-7e986.firebaseio.com/menu.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data);
        let menuArr = [];
        for (var key in data) {
          data[key].id = key;
          menuArr.push(data[key]);
        }
        this.getMenuItems = menuArr;
        console.log(this.getMenuItems);
      });
  },
  methods: {
    deleteData(item) {
      fetch(
        "https://pizza-app-7e986.firebaseio.com/menu/" + item.id + "/.json",
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json"
          }
        }
      )
        .then(res => {
          res.json();
        })
        .then(data => {
          // console.log(data);
          this.$router.push({ name: "menuLink" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  // data() {
  //   return {
  //     name: "alvis"
  //   };
  // }
  //
  // beforeRouterEnter: (to, from, next) => {
  //   // alert("hello" + this.name);
  //   // next()
  //   next("hello" + vm.name);
  // },
  // beforeRouteLeave(to, from, next) {
  //   if (confirm(" 确定离开吗？") == true) {
  //     next();
  //   } else {
  //     next(false);
  //   }
  // }
};
</script>