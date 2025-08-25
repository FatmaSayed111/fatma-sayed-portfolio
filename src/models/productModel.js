export class Product {
  constructor(id, title, description, price, thumbnail) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
  }

  static fromApi(item) {
    return new Product(
      item.id,
      item.title,
      item.description,
      item.price,
      item.thumbnail
    );
  }
}
