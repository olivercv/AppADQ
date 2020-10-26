"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

var _uploadFile = require("../controllers/uploadFile.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.use((0, _expressFileupload["default"])());
router.put('/:id', _uploadFile.uploadFile);
router.put('/dropzone/:id', _uploadFile.uploadFiles);
router.get('/:src', _uploadFile.getFile);
var _default = router;
exports["default"] = _default;