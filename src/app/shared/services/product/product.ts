export class Product {
  _id: string;
  name: string;
  price: number;
  img: string;
  likes: number;
  discount: number;

  constructor(product?) {
    if (product) {
      this._id = product._id;
      this.name = product.name;
      this.price = product.price;
      this.img = product.img;
      this.likes = product.likes;
      this.discount = product.discount;
    }
  }
}
