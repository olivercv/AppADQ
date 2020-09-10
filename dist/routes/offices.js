"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _office = require("../controllers/office.controller");

var router = (0, _express.Router)();
router.get('/', _office.getOffices);
router.get('/:id', _office.getOffice);
router.post('/', _office.createOffice);
router.put('/:id', _office.updateOffice);
router["delete"]('/:id', _office.deleteOffice);
router.get('/all/:id', _office.getOF);
var _default = router;
exports["default"] = _default;