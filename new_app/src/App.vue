<template>
  <div id="app">
    <Header @toggle-cart="toggleCart" @filter-goods="filterGoods" />
    <main>
      <GoodsList @add-to-cart="addToCart" :goods="filteredGoods" />
      <br />
      <Cart :makePOSTRequest="makePOSTRequest" :getCart="getCart"  :cartGoods="cartGoods" :isVisibleCart="isVisibleCart" />
    </main>
  </div>
</template>
<script>
// 1. Вынести весь хэдер в компонент
// 2. Вынести корзину в компонент
import GoodsList from './components/GoodsList';
import Header from './components/Header';
import Cart from './components/Cart';
const API_URL = 'http://localhost:3000'
export default {
  components: {
    GoodsList,
    Header,
    Cart,
  },
  data: () => ({
    goods: [],
    cartGoods: [],
    filteredGoods: [],
    isVisibleCart: false,
  }),
  mounted() {
    this.getGoods();
    this.getCart();
  },
  methods: {
    addToCart(item) {
      console.log(item)
      this.makePOSTRequest(`${API_URL}/addToCart`, item)
        .then(() => this.getCart())
    },
    makeGETRequest(url) {
      return fetch(url)
        .then((data) => data.json())
    },
    makePOSTRequest(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          // добавили хэдер
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
        .then((data) => data.json())
    },
    getGoods() {
      this.makeGETRequest(`${API_URL}/catalogData`)
        .then((data) => {
          this.goods = data;
          this.filteredGoods = data;
        }) 
    },
    getCart() {
      this.makeGETRequest(`${API_URL}/cartData`)
        .then((data) => {
          this.cartGoods = data
        })
    },
    filterGoods(value) {
      const regexp = new RegExp(value, 'i');
      this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    },
    toggleCart() {
      this.isVisibleCart = !this.isVisibleCart;
    }
  },
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
}
.cart-button {
    background-color: aliceblue;
    border: none;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    cursor: pointer;
}
.cart-button:hover {
    background-color: #86e5fc;
    color: white;
}
.sum {
    font-size: 25px;
}
</style>
