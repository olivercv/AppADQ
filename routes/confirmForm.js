"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _confirmForm = require("../controllers/confirmForm.controller");

var router = (0, _express.Router)();
router.get('/', _confirmForm.getConfirmations);
router.get('/:id', _confirmForm.getConfirmation);
router.post('/', _confirmForm.createConfirmation);
router.put('/:id', _confirmForm.updateConfirmation);
router["delete"]('/:id', _confirmForm.deleteConfirmation);
router.get('/all/:id', _confirmForm.getConf);
var _default = router;
exports["default"] = _default;