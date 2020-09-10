"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _position = require("../controllers/position.controller");

var router = (0, _express.Router)();
router.get('/', _position.getPositions);
router.get('/:id', _position.getPosition);
router.post('/', _position.createPosition);
router.put('/:id', _position.updatePosition);
router["delete"]('/:id', _position.deletePosition);
var _default = router;
exports["default"] = _default;