"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _processStart = require("../controllers/processStart.controller");

var router = (0, _express.Router)();
router.get('/', _processStart.getProcessStarts);
router.get('/:id', _processStart.getProcessStart);
router.post('/', _processStart.createProcessStart);
router.put('/:id', _processStart.updateProcessStart);
router["delete"]('/:id', _processStart.deleteProcessStart);
router.get('/all/:id', _processStart.getPSD);
var _default = router;
exports["default"] = _default;