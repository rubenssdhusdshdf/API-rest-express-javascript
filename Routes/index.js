const express = require('express');
const Chance = require('chance');
const chance = new Chance();


const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require ('./categories.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
