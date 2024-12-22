const express = require('express');
const ProductsService = require('../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  console.log('Fetching products...'); // Debug log
  const products = service.find();
  console.log('Products:', products); // Debug log
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  try {
    const product = service.findOne(id);
    if (!product) {
      throw new Error('Product not found');
    }
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
 res.json(product)
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
