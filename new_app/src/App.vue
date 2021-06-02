<template>
  <div id="app">
    <header class="header" >
        <input v-model="searhLine" type="text" class="goods-search" />
        <button class="search-button" type="button" @click="filterGoods">Искать</button>
        <button class="cart-button" type="button" @click="toggleCart">Корзина</button>
    </header>
    <main>
        <GoodsList :goods = "filteredGoods" />
        <div v-show="isVisibleCart" class="cart">
            Корзина
        <div class="goods-cart"></div>
        </div>
        
    </main>     
  </div>
</template>

<script>
import GoodsList from './components/GoodsList';
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

export default {
components: {
    GoodsList,
},
data: () => ({
  goods: [],
  filteredGoods: [],
  searhLine: '',
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
    filterGoods() {
        const regexp = new RegExp(this.searhLine, 'i');
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
.header {
    background-color: #222222;
    min-height: 75px;
    display: flex;
    justify-content: space-evenly;
    padding:20px 10px 20px;
}
.goods-search {
    outline: none;
    border-radius: 10px;
}
.search-button {
    background-color: aliceblue;
    border: none;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    cursor: pointer;
}
.search-button:hover {
    background-color: #86e5fc; 
    color: white;  
}

.cart {
    background-color: aliceblue;
    height: 300px;
    border: solid 1px #86e5fc;
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
