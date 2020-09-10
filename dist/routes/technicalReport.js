"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _technicalReport = require("../controllers/technicalReport.controller");

var router = (0, _express.Router)();
router.get('/', _technicalReport.getTechnicalReports);
router.get('/:id', _technicalReport.getTechnicalReport);
router.post('/', _technicalReport.createTechnicalReport);
router.put('/:id', _technicalReport.updateTechnicalReport);
router["delete"]('/:id', _technicalReport.deleteTechnicalReport);
router.get('/all/:id', _technicalReport.getTR);
var _default = router;
exports["default"] = _default;