const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];
  
  const catalogBlock = document.querySelector('.goods-list');

  const renderGoodsItem = (item) => {
    return `<div class="goods-item">
            <h3>${item.title}</h3>
            <p>${item.price} руб</p>
            <button class="goods-button" type="button">Добавить</button>
            </div>`;
  };
  //Заменила метод map на метод foreach, на мой взгляд это более проще для понимания.
  //Уменьшила количество строчек кода. Так же благодаря этому ушли запятые. 
  const renderGoodsList = (list) => { 
    list.forEach(item => {
      catalogBlock.insertAdjacentHTML('beforeend', renderGoodsItem(item)); 
    });
  }
  
  renderGoodsList(goods);
 
 

  // const renderGoodsList = (list) => {
    //let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    //document.querySelector('.goods-list').innerHTML = goodsList;
  //}
  