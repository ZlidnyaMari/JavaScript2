<template>
  <div id="app">
      <Header @toggle-cart = 'toggleCart' @filter-goods = 'filterGoods' />
    <main>
        <GoodsList :goods = "filteredGoods" />
        <Cart :isVisibleCart = 'isVisibleCart'/>
    </main>     
  </div>
</template>

<script>
import GoodsList from './components/GoodsList';
import Header from './components/Header';
import Cart from './components/Cart';
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

export default {
components: {
    GoodsList,
    Header,
    Cart,
},
data: () => ({
  goods: [],
  filteredGoods: [],
  isVisibleCart: false,
}),
mounted() {
this.makeGETRequest (`${API_URL}/catalogData.json`)
},
methods: {
    makeGETRequest(url) {
        fetch(url)
            .then((data) => data.json())
            .then((data) => {
            this.goods = data;
            this.filteredGoods = data;
      })
  },
    filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    },
    toggleCart() {
        this.isVisibleCart = !this.isVisibleCart;
    },
  },
   watch: {
        searhLine(){
            this.filterGoods();
        }
   }
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
