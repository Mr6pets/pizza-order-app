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
                <button @click="increasement(item)" class="btn btn-sm">-</button>
                <span>{{item.quantity}}</span>
                <button @click="decreasement(item)" class="btn btn-sm">+</button>
              </td>
              <td>{{item.name}}{{item.size}}</td>
              <td>{{item.price*item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <p>总价:</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else>{{basketText}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      baskets: [],
      basketText: "购物车还没有商品！",
      getMenuItems: {
        1: {
          name: "榴莲pizza",
          description: "这是喜欢吃榴莲朋友的最佳选择",
          options: [{ size: 9, price: 38 }, { size: 12, price: 48 }]
        },
        2: {
          name: "芝士pizza",
          description: "这是喜欢吃芝士朋友的最佳选择",
          options: [{ size: 9, price: 38 }, { size: 12, price: 48 }]
        },
        3: {
          name: "芒果pizza",
          description: "这是喜欢吃芒果朋友的最佳选择",
          options: [{ size: 9, price: 38 }, { size: 12, price: 48 }]
        }
      }
    };
  },
  methods: {
    addToBasket(item, option) {
      this.baskets.push({
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      });
    },
    increasement(item) {
      item.quantity--;
      if (item.quantity <= 0) {
        item.quantity = 0;
      }
    },
    decreasement(item) {
      item.quantity++;
    }
  }
};
</script>