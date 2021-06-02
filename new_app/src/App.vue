<template>
  <div id="app">
    <header class="header" >
        <input v-model="searhLine" type="text" class="goods-search" />
        <button class="search-button" type="button" @click="filterGoods">Искать</button>
        <button class="cart-button" type="button" @click="toggleCart">Корзина</button>
    </header>
    <main>
        <div class="goods-list">
          <div v-for="item in filteredGoods" :key="item.id_product" class="goods-item">
              <h3>{{item.product_name}}</h3>
              <p>{{item.price}} руб</p>
              <button class = 'goods-button'>Добавить</button>
              </div>
        </div>
        
        <div v-show="isVisibleCart" class="cart">
            Корзина
        <div class="goods-cart"></div>
        </div>
        
    </main>     
  </div>
</template>

<script>

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

export default {
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
.goods-list {
    display: flex;
    justify-content: space-evenly;
    padding-top: 100px;
    padding-bottom: 100px;
    text-align: center;
    
}
.goods-item {
    border: solid black 2px;
    padding: 30px;
    display: flex;
    flex-direction: column;  
}
.goods-button {
    background-color: aliceblue;
    border: none;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 30px;
}
.goods-button:hover {
    background-color: #86e5fc; 
    color: white; 
}
.sum {
    font-size: 25px;
}
</style>
