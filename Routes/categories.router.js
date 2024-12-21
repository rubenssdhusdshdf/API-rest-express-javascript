
const express = require('express');
const Chance = require('chance');
const chance = new Chance();
const router = express.Router();

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

module.exports = router; // modulo exportable
