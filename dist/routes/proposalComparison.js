"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _proposalComparison = require("../controllers/proposalComparison.controller");

var router = (0, _express.Router)();
router.get('/', _proposalComparison.getProposalComparisons);
router.get('/:id', _proposalComparison.getProposalComparison);
router.post('/', _proposalComparison.createProposalComparison);
router.put('/:id', _proposalComparison.updateProposalComparison);
router["delete"]('/:id', _proposalComparison.deleteProposalComparison);
router.get('/all/:id', _proposalComparison.getPCD);
var _default = router;
exports["default"] = _default;