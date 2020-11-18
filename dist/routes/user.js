"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _authenticated = require("../middlewares/authenticated");

var _user = require("../controllers/user.controller");

var router = (0, _express.Router)();
router.get('/', _user.getUsers);
router.get('/:id', _user.getUser);
router.post('/', _user.createUser);
router.put('/:id', _authenticated.ensureAuth, _user.updateUser);
router["delete"]('/:id', _authenticated.ensureAuth, _user.deleteUser);
router.post('/signup', _user.register);
router.post('/signin', _user.signin);
router.put('/password/:id', _authenticated.ensureAuth, _user.updatePassword);
var _default = router;
exports["default"] = _default;