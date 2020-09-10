"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _product = require("../controllers/product.controller");

var router = (0, _express.Router)();
router.get('/', _product.getProducts);
router.get('/:id', _product.getProduct);
router.post('/', _product.createProduct);
router.put('/:id', _product.updateProduct);
router["delete"]('/:id', _product.deleteProduct);
var _default = router;
exports["default"] = _default;