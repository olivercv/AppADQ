"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _legalContract = require("../controllers/legalContract.controller");

var router = (0, _express.Router)();
router.get('/', _legalContract.getLegalContracts);
router.get('/:id', _legalContract.getLegalContract);
router.post('/', _legalContract.createLegalContract);
router.put('/:id', _legalContract.updateLegalContract);
router["delete"]('/:id', _legalContract.deleteLegalContract);
router.get('/all/:id', _legalContract.getLCD);
var _default = router;
exports["default"] = _default;