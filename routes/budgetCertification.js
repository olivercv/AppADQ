"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _budgetCertification = require("../controllers/budgetCertification.controller");

var router = (0, _express.Router)();
router.get('/', _budgetCertification.getBudgetCertifications);
router.get('/:id', _budgetCertification.getBudgetCertification);
router.post('/', _budgetCertification.createBudgetCertification);
router.put('/:id', _budgetCertification.updateBudgetCertification);
router["delete"]('/:id', _budgetCertification.deleteBudgetCertification);
router.get('/all/:id', _budgetCertification.getBC);
var _default = router;
exports["default"] = _default;