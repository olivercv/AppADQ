"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Document = _interopRequireDefault(require("./Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TechnicalReport = _database.sequelize.define('technicalReport', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  background: {
    type: _sequelize["default"].TEXT
  },
  acquisitionObjetive: {
    type: _sequelize["default"].TEXT
  },
  testInspection: {
    type: _sequelize["default"].TEXT
  },
  supportDocument: {
    type: _sequelize["default"].TEXT
  },
  technicalQuarantee: {
    type: _sequelize["default"].TEXT
  },
  technicalService: {
    type: _sequelize["default"].TEXT
  },
  placeDelivery: {
    type: _sequelize["default"].TEXT
  },
  deliveryTerm: {
    type: _sequelize["default"].TEXT
  },
  price: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

TechnicalReport.hasMany(_Document["default"], {
  foreignKey: 'formId',
  sourceKey: 'id'
});

_Document["default"].belongsTo(TechnicalReport, {
  foreignKey: 'formId',
  sourceKey: 'id'
});

var _default = TechnicalReport;
exports["default"] = _default;