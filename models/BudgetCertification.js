"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Document = _interopRequireDefault(require("./Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BudgetCertification = _database.sequelize.define('budgetCertification', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  reserveCode: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

BudgetCertification.hasMany(_Document["default"], {
  foreignKey: 'formId',
  sourceKey: 'id'
});

_Document["default"].belongsTo(BudgetCertification, {
  foreignKey: 'formId',
  sourceKey: 'id'
});

var _default = BudgetCertification;
exports["default"] = _default;