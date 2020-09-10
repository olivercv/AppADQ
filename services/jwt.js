"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createToken = createToken;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = require("../config/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createToken(user) {
  var payload = {
    _id: user.id,
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    rol: user.rol,
    positionId: user.positionId
  };
  return _jsonwebtoken["default"].sign(payload, _config.cfg.key, {
    expiresIn: '6h'
  });
}