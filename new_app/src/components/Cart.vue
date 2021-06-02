<template>
    <div v-show="isVisibleCart" class="cart">
            Корзина
        <div class="goods-cart"></div>
    </div>
</template>
<script>
export default {
    props: {
        isVisibleCart: {
             type: Boolean,
            default: false,
        }
    }
}
</script>

<style>
.cart {
    background-color: aliceblue;
    height: 300px;
    border: solid 1px #86e5fc;
}
</style>