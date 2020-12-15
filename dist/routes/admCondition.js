"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _admCondition = require("../controllers/admCondition.controller");

var router = (0, _express.Router)();
router.get('/', _admCondition.getAdmConditions);
router.get('/:id', _admCondition.getAdmCondition);
router.get('/request/:requestId', _admCondition.getAdmConditionRequest);
router.post('/', _admCondition.createAdmCondition);
router.put('/:id', _admCondition.updateAdmCondition);
router["delete"]('/:id', _admCondition.deleteAdmCondition);
var _default = router;
exports["default"] = _default;