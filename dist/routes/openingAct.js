"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _openingAct = require("../controllers/openingAct.controller");

var router = (0, _express.Router)();
router.get('/', _openingAct.getOpeningActs);
router.get('/:id', _openingAct.getOpeningAct);
router.post('/', _openingAct.createOpeningAct);
router.put('/:id', _openingAct.updateOpeningAct);
router["delete"]('/:id', _openingAct.deleteOpeningAct);
router.get('/all/:id', _openingAct.getOA);
var _default = router;
exports["default"] = _default;