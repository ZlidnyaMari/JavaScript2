<template>
    <div v-show="isVisibleCart" class="cart">
            <h3>Корзина</h3>
        <div class="goods-cart">
            <div v-for="item in cartGoods" :key="item.id_product" class='goods-item'>
            <h3>{{item.product_name}}</h3>
            <p>{{item.price}} руб</p>
            <button @click="onClick(item)" class="goods-button">Удалить</button>
            </div>
        </div>
    </div>
</template>
<script>

const API_URL = 'http://localhost:3000'

export default {
    props: {
        isVisibleCart: {
             type: Boolean,
            default: false,
        },
         cartGoods: {
            type: Array,
            default: () => ([]),
        },
         makePOSTRequest: {
            type: Function,
             default: () => null
    },
         getCart: {
            type: Function,
             default: () => null
    }
  },
  methods: {
    onClick(item) {
      this.makePOSTRequest(`${API_URL}/deleteFromCart`, item)
        .then(() => this.getCart())
    }
  }
}
</script>

<style>
.goods-cart {
    display: flex;
    justify-content: space-evenly;
    background-color: aliceblue;
    border: solid 1px #86e5fc;
    flex-wrap: wrap;
    text-align: center;
}
</style>