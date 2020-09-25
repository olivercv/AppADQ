"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Document = _interopRequireDefault(require("./Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Specification = _database.sequelize.define('specification', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  codeRequest: {
    type: _sequelize["default"].UUID
  }
}, {
  timestamps: false
});

Specification.hasMany(_Document["default"], {
  foreignKey: 'formId',
  sourceKey: 'id'
});

_Document["default"].belongsTo(Specification, {
  foreignKey: 'formId',
  sourceKey: 'id'
});

var _default = Specification;
exports["default"] = _default;