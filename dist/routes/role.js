"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _role = require("../controllers/role.controller");

var router = (0, _express.Router)();
router.get('/', _role.getRoles);
router.get('/:id', _role.getRole);
router.post('/', _role.createRole);
router.put('/:id', _role.updateRole);
router["delete"]('/:id', _role.deleteRole);
var _default = router;
exports["default"] = _default;