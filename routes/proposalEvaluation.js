"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _proposalEvaluation = require("../controllers/proposalEvaluation.controller");

var router = (0, _express.Router)();
router.post('/', _proposalEvaluation.createProposalEvaluation);
router.get('/', _proposalEvaluation.getProposalEvaluations);
router.get('/:id', _proposalEvaluation.getProposalEvaluation);
router.put('/:id', _proposalEvaluation.updateProposalEvaluation);
router["delete"]('/:id', _proposalEvaluation.deleteProposalEvaluation);
router.get('/all/:id', _proposalEvaluation.getPEP);
var _default = router;
exports["default"] = _default;