<template>
    <div>
        <div class="goods-list">
          <div v-for="item in goods" :key="item.id_product" class="goods-item">
              <h3>{{item.product_name}}</h3>
              <p>{{item.price}} руб</p>
              <button class = 'goods-button'>Добавить</button>
              </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        goods: {
            type: Array,
            default: () => [],
        }
    }
}
</script>

<style>
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
</style>