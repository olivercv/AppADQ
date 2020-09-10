"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _purchaseOrder = require("../controllers/purchaseOrder.controller");

var router = (0, _express.Router)();
router.get('/', _purchaseOrder.getPurchaseOrders);
router.get('/:id', _purchaseOrder.getPurchaseOrder);
router.post('/', _purchaseOrder.createPurchaseOrder);
router.put('/:id', _purchaseOrder.updatePurchaseOrder);
router["delete"]('/:id', _purchaseOrder.deletePurchaseOrder);
router.get('/all/:id', _purchaseOrder.getPOD);
var _default = router;
exports["default"] = _default;