"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _specification = require("../controllers/specification.controller");

var router = (0, _express.Router)();
router.get('/', _specification.getSpecifications);
router.get('/:id', _specification.getSpecification);
router.post('/', _specification.createSpecification);
router.put('/:id', _specification.updateSpecification);
router["delete"]('/:id', _specification.deleteSpecification);
router.get('/all/:id', _specification.getSP);
var _default = router;
exports["default"] = _default;