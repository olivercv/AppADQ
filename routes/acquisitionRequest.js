"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _acquisitionRequest = require("../controllers/acquisitionRequest.controller");

var router = (0, _express.Router)();
router.get('/', _acquisitionRequest.getAcquisitionRequests);
router.get('/:id', _acquisitionRequest.getAcquisitionRequest);
router.post('/', _acquisitionRequest.createAcquisitionRequest);
router.put('/:id', _acquisitionRequest.updateAcquisitionRequest);
router["delete"]('/:id', _acquisitionRequest.deleteAcquisitionRequest);
router.get('/all/:id', _acquisitionRequest.getADQRequest);
var _default = router;
exports["default"] = _default;