const express = require('express');
const Chance = require('chance');
const chance = new Chance();
const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No query parameters provided'); // Updated message
  }
});

module.exports = router; // modulo exportable
