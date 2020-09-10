"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _document = require("../controllers/document.controller");

var router = (0, _express.Router)();
router.post('/', _document.createDocument);
router.get('/', _document.getDocuments);
router.get('/:id', _document.getDocument);
router.put('/:id', _document.updateDocument);
router["delete"]('/:id', _document.deleteDocument);
router.get('/form/:id', _document.getDocumentForm);
var _default = router;
exports["default"] = _default;