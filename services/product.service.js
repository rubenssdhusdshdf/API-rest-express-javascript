const Chance = require('chance');
const chance = new Chance();

class ProductsService {
  constructor() {
    this.products = [];
    this.categories = ['electronics', 'clothing', 'books', 'furniture'];
    this.generate();
  }

  generate(size = 10) {
    const limit = parseInt(size, 10);
    for (let index = 0; index < limit; index++) {
      const randomCategory = this.categories[chance.integer({ min: 0, max: this.categories.length - 1 })];
      this.products.push({
        id: chance.guid(),
        name: chance.word(),
        price: parseFloat(chance.floating({ min: 10, max: 1000, fixed: 2 })),
        image: `https://source.unsplash.com/random/?${randomCategory}`,
        category: randomCategory,
      });
    }
  }

  create(product) {
    const newProduct = { id: chance.guid(), ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((product) => product.id === id);
  }

  update(id, changes) {
    const productIndex = this.products.findIndex((product) => product.id === id);
    if (productIndex === -1) {
      throw new Error('Product not found');
    }
    const updatedProduct = { ...this.products[productIndex], ...changes };
    this.products[productIndex] = updatedProduct;
    return updatedProduct;
  }

  delete(id) {
    const productIndex = this.products.findIndex((product) => product.id === id);
    if (productIndex === -1) {
      throw new Error('Product not found');
    }
    const [deletedProduct] = this.products.splice(productIndex, 1);
    return deletedProduct;
  }
}

module.exports = ProductsService;
