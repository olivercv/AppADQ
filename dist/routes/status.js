"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _status = require("../controllers/status.controller");

var router = (0, _express.Router)();
router.get('/', _status.getStatuss);
router.get('/:id', _status.getStatus);
router.get('/byrequest/:codeRequest', _status.getStatusByRequest);
router.get('/detailForms/:codeRequest', _status.getStatusByRequestForm);
router.get('/getByProcedure/:codeRequest/:procedureId', _status.getStatusByRequestAndProcedure);
router.get('/current/:codeRequest', _status.getCurrentStatus);
router.post('/', _status.createStatus);
router.put('/:id', _status.updateStatus);
router["delete"]('/:id', _status.deleteStatus);
router.get('/positionId/:id/:procedureId/:userId', _status.getStatusPositionId);
router.post('/statusById/', _status.getStatusByUserId);
var _default = router;
exports["default"] = _default;