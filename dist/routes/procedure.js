"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _procedure = require("../controllers/procedure.controller");

var router = (0, _express.Router)();
router.get('/', _procedure.getProcedures);
router.get('/:id', _procedure.getProcedure);
router.get('/byposition/:positionId', _procedure.getProcedureStatus);
router.get('/byorder/:order', _procedure.getProcedureByOrder);
router.get('/bycatorder/:category/:order', _procedure.getProcedureByCategoryOrder);
router.post('/', _procedure.createProcedure);
router.put('/:id', _procedure.updateProcedure);
router["delete"]('/:id', _procedure.deleteProcedure);
router.get('/ps/:id', _procedure.getProcedureStatus);
var _default = router;
exports["default"] = _default;