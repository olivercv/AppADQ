"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _company = require("../controllers/company.controller");

var router = (0, _express.Router)();
router.get('/', _company.getCompanies);
router.get('/:id', _company.getCompany);
router.post('/', _company.createCompany);
router.put('/:id', _company.updateCompany);
router["delete"]('/:id', _company.deleteCompany);
var _default = router;
exports["default"] = _default;