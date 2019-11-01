<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>
              <strong>{{item.name}}</strong>
            </td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td>
              <button @click="addToBasket(item,option)" class="btn btn-sm btn-outline-success">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-sm-12 col-md-4">
      <div v-if="baskets.length>0">
        <table class="table">
          <thead class="thead-defaut">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="item in baskets" :key="item.name">
            <tr>
              <td>
                <button @click="decreasement(item)" class="btn btn-sm">-</button>
                <span>{{item.quantity}}</span>
                <button @click="increasement(item)" class="btn btn-sm">+</button>
              </td>
              <td>{{item.name}}{{item.size}}</td>
              <td>{{item.price*item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <p>总价:{{total+"rmb"}}</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else>{{basketText}}</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      baskets: [],
      basketText: "购物车还没有商品！"
      // getMenuItems: {}
    };
  },
  computed: {
    getMenuItems() {
      //获取vuex中的数据
      // return this.$store.state.menuItems;
      //通过getters获取数据
      return this.$store.getters.getMenuItems;
    },
    total() {
      let totalCost = 0;
      for (let index in this.baskets) {
        let individualItem = this.baskets[index];
        totalCost += individualItem.quantity * individualItem.price;
      }
      return totalCost;
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // fetch("https://pizza-app-7e986.firebaseio.com/menu.json")
      //   .then(res => {
      //     return res.json();
      //   })
      //   .then(data => {
      //     this.getMenuItems = data;
      //   });
      //axios请求firebase数据库
      // axios.get("menu.json").then(res => {
      //   this.getMenuItems = res.data;
      // });
      //请求firebase的数据到页面
      // this.http.get("menu.json").then(res => {
      //   this.getMenuItems = res.data;
      // });
      //将请求下来的数据存储到vuex中
      //获取firebase的数据到vuex的setMenuItem方法中
      this.http
        .get("menu.json")
        .then(res => this.$store.commit("setMenuItems", res.data));
    },
    addToBasket(item, option) {
      let basket = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      };
      if (this.baskets.length > 0) {
        //如果当前的baskets有内容 那就是说明 里面有数据了 需要过滤
        let result = this.baskets.filter(basket => {
          return basket.name == item.name && basket.price == option.price;
        });
        if (result != null && result.length > 0) {
          result[0].quantity++;
        } else {
          this.baskets.push(basket);
        }
      } else {
        //这里说明这个baskets中没有数据 所以点击添加按钮 将数组添加进去
        this.baskets.push(basket);
      }
    },
    decreasement(item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.removeFromBasket(item);
      }
    },
    increasement(item) {
      item.quantity++;
    },
    removeFromBasket(item) {
      this.baskets.splice(this.baskets.indexOf(item), 1);
    }
  }
};
</script>