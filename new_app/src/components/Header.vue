<template>
    <header class="header" >
        <input v-model="searhLine" type="text" class="goods-search" />
        <button class="search-button" type="button" @click="Onclick">Искать</button>
        <button class="cart-button" type="button" @click="$emit('toggle-cart')">Корзина</button>
    </header>
</template>

<script>
export default {
   data: () => ({
        searhLine: '',
    }),
    methods: {
        Onclick() {
            this.$emit('filter-goods', this.searhLine);
        }
    },
     watch: {
        searhLine(){
            this.Onclick();
        }
     }    
}
</script>

<style>
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
</style>