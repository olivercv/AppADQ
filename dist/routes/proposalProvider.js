"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _proposalProvider = require("../controllers/proposalProvider.controller");

var router = (0, _express.Router)();
router.post('/', _proposalProvider.createProposalProvider);
router.get('/', _proposalProvider.getProposalProviders);
router.get('/:id', _proposalProvider.getProposalProvider);
router.put('/:id', _proposalProvider.updateProposalProvider);
router["delete"]('/:id', _proposalProvider.deleteProposalProvider);
router.get('/form/:id', _proposalProvider.getPPForm);
var _default = router;
exports["default"] = _default;