"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Document = _interopRequireDefault(require("./Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OpeningAct = _database.sequelize.define('openingAct', {
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

OpeningAct.hasMany(_Document["default"], {
  foreignKey: 'formId',
  sourceKey: 'id'
});

_Document["default"].belongsTo(OpeningAct, {
  foreignKey: 'formId',
  sourceKey: 'id'
});

var _default = OpeningAct;
exports["default"] = _default;