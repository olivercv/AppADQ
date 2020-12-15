"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAuth = ensureAuth;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = require("../config/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ensureAuth(req, res, next) {
  // console.log(req.headers.authorization);
  if (!req.headers.authorization) {
    res.status(401).json({
      message: 'Solicitud desautorizada'
    });
  }

  var token = req.headers.authorization.split(' ')[1];

  if (token === 'null') {
    res.status(401).json({
      message: 'Solicitud desautorizada'
    });
  }

  try {
    var payload = _jsonwebtoken["default"].verify(token, _config.cfg.key);

    console.log('Difference:', payload.exp - payload.iat);

    if (payload.exp - payload.iat <= 0) {
      return res.status(401).send({
        message: 'El Token ha expirado'
      });
    }

    req.user = payload;
    next();
  } catch (err) {
    console.error(err);
    return res.status(404).send({
      message: 'Token no válido'
    });
  }
}