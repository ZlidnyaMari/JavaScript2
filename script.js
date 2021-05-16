

class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  renderGoodsItem = () => {
    return `<div class="goods-item">
            <h3>${this.title}</h3>
            <p>${this.price} руб</p>
            <button class="goods-button" type="button">Добавить</button>
            </div>`;
  };
}
class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }
  renderGoodsList = () => {
    let listHtml = ''; 
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price); 
      listHtml += goodItem.renderGoodsItem(); 
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
    document.body.insertAdjacentHTML( 'beforeend',
    `<div class = 'sum'>Общая стоимость ${this.getPrice()} руб.</div>`);
    
  }
  getPrice() {
    return this.goods.reduce((price, good) => {
      return price + good.price;
    },0);
  } 
}
  const list = new GoodsList();
  list.fetchGoods();
  list.renderGoodsList();
 
 
 

  // const renderGoodsList = (list) => {
    //let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    //document.querySelector('.goods-list').innerHTML = goodsList;
  //}
  
  //unit(){
    //this.catalogBlock = document.querySelector('.goods-list');}

     //this.catalogBlock.insertAdjacentHTML('beforeend', renderGoodsItem(good)); 