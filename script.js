
  const cartGood = new CartGood();
  const cartItem = new CartItem();
  const list = new GoodsList();
  list.fetchGoods();
  list.renderGoodsList();;
 
 
 /*Вопросы к дз. 1.Добрый день. Скажите пожалуйста если мы делаем наследование от товара каталога, то и метод добавления 
 renderGoodsItem с кусочком разметки будет у корзины такой же как и в списке товаров , а если я хочу, что бы у меня 
 в корзине была другая разметка?   
                2.Зачем вы в разборе дз добавляете в корзину метод addItem? что мы можем добавлять в корзину из самой корзины? 

 */ 
  
  
  
  
                // const renderGoodsList = (list) => {
    //let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    //document.querySelector('.goods-list').innerHTML = goodsList;
  //}
  
  //unit(){
    //this.catalogBlock = document.querySelector('.goods-list');}

     //this.catalogBlock.insertAdjacentHTML('beforeend', renderGoodsItem(good)); 