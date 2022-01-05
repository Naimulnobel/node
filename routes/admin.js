const path = require("path")
const express = require('express');
const rootDir = require('../util/path')
const router = express.Router()
const products = []
router.get('/add-product', (req, res, next) => {
    console.log('yo')
    res.sendFile(path.join(rootDir, 'views', 'addProduct.html'))
});
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/')
})
module.exports.routes = router
module.exports.products = products