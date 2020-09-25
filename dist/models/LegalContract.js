"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Document = _interopRequireDefault(require("./Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LegalContract = _database.sequelize.define('legalContract', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  responsable: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

LegalContract.hasMany(_Document["default"], {
  foreignKey: 'formId',
  sourceKey: 'id'
});

_Document["default"].belongsTo(LegalContract, {
  foreignKey: 'formId',
  sourceKey: 'id'
});

var _default = LegalContract;
exports["default"] = _default;