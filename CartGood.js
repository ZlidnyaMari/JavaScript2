class CartGood extends GoodsList {
    constructor(...args) {
      super(...args)
    }
    clearCart() {}
    deleteGood() {}
  }
  class CartItem extends GoodsItem {
    constructor(title, price, count) {
      super(title, price);
      this.count = count;    
    }
    addItem() {}
    deleteItem() {}
  }