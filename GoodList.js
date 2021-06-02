const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const makeGETRequest = (url, callback) => {
    return new Promise ((recolve, reject) => {
    let xhr;
  
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) callback(xhr.responseText);
        else reject ('Eror')
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send();
  })
}

class GoodsItem {
    constructor(product_name, price, id_product) {
      this.product_name = product_name;
      this.price = price;
      this.id_product = id_product;
    }
    renderGoodsItem () {
        let data = {
            product_name: this.product_name,
            price: this.price,
            id_product: this.id_product,
        };
        data = JSON.stringify(data);

        return `<div class="goods-item">
              <h3>${this.product_name}</h3>
              <p>${this.price} руб</p>
              <button data-product = '${data}' id = 'add-btn-${this.id_product}'>Добавить</button>
              </div>`;
    }
  }
  
  class GoodsList {
    _cartGood = new cartGood();
    
    constructor() {
      this.goods = [];
    }
    fetchGoods(cb) {
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            cb();
        })
    }
      
    renderGoodsList = () => {
      let listHtml = ''; 
      this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.product_name, good.price, good.id_product); 
        listHtml += goodItem.renderGoodsItem(); 
      });
      document.querySelector('.goods-list').innerHTML = listHtml;
      this._cartGood.setAddListeners(this.goods);
      document.body.insertAdjacentHTML( 'beforeend',
      `<div class = 'sum'>Общая стоимость каталога ${this.getPrice()} руб.</div>`);
      
    }
    getPrice() {
      return this.goods.reduce((price, good) => {
        return price + good.price;
      },0);
    } 
  }

  class cartGood {
      constructor () {
          this.goods = []; 
      }
      addGood ({target}) {
          const { product = {}} = target.dataset;
          this.goods.push(JSON.parse(product));
          console.log(product)
          this.renderGoodsList;
      }
      deleteGood ({target}) {
          const { id = null} = target.dataset;
          this.goods = this.goods.filter((item) => String(item.id_product) !== String(id));
          this.renderGoodsList;
      }
      setAddListeners(list) {
         list.forEach((item) => {
             document.getElementById(`add-btn-${item.id_product}`).addEventListener('click', (e) => this.addGood(e));
         })  
      }
      setDeleteListeners() {
          list.forEach ((item) => {
              document.getElementById(`delete-btn-${item.id_product}`).addEventListener('click', (e) => this.deleteGood(e));
          })
      }
      renderGoodsList = () => {
        let listHtml = ''; 
        this.goods.forEach(good => {
          const goodItem = new CartItem(good.product_name, good.price, good.id_product); 
          listHtml += goodItem.renderCartItem(); 
        });
        document.querySelector('.goods-cart').innerHTML = listHtml;
        this.setDeleteListeners();

  }
}
class CartItem extends GoodsItem {
    constructor(...args) {
      super(...args);    
    }
    renderCartItem () {
        return `<div class="goods-item">
                <h3>${this.product_name}</h3>
                <p>${this.price} руб</p>
                <button data-id = '${this.id_product}' id = 'delete-btn-${this.id_product}'>Удалить</button>
                </div>`;
        }
    addItem() {}
    deleteItem() {}
  }

 