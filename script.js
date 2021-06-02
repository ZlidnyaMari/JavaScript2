  const list = new GoodsList();
  list.fetchGoods (() => {
  list.renderGoodsList();
  });
  
  const searchButton =  document.querySelector('.search-button')
  const searchInput = document.querySelector('.goods-search')
  searchButton.addEventListener('click', (e) => {
   const value = searchInput.value
   list.filterGoods(value)
 });
 
 /* 
  Вопросы к дз №3. Что я делаю не так, у меня не отрисовывается корзина в браузере? Списала методы добавления в корзину товаров 
  у вас, даже вроде разобралась, что по чем, сама бы ни за что не сделала бы, не заю какую оценку заслуживает моя работа. 
 */ 
  
  
  
  
                // const renderGoodsList = (list) => {
    //let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    //document.querySelector('.goods-list').innerHTML = goodsList;
  //}
  
  //unit(){
    //this.catalogBlock = document.querySelector('.goods-list');}

     //this.catalogBlock.insertAdjacentHTML('beforeend', renderGoodsItem(good)); 