const mongoose = require('mongoose')
const express = require('express')
const { json } = require('express')
const router = express.Router()
const Products = require('../models/products')
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');

router.route('/products')
  .get(async (req, res) => {
    let ProductList = await Products.find().exec()

    res.json(ProductList)

  })

module.exports = router