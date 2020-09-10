"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _technicalEvaluation = require("../controllers/technicalEvaluation.controller");

var router = (0, _express.Router)();
router.get('/', _technicalEvaluation.getTechnicalEvaluations);
router.get('/:id', _technicalEvaluation.getTechnicalEvaluation);
router.post('/', _technicalEvaluation.createTechnicalEvaluation);
router.put('/:id', _technicalEvaluation.updateTechnicalEvaluation);
router["delete"]('/:id', _technicalEvaluation.deleteTechnicalEvaluation);
router.get('/all/:id', _technicalEvaluation.getTED);
var _default = router;
exports["default"] = _default;