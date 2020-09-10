"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Document = _interopRequireDefault(require("./Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PurchaseOrder = _database.sequelize.define('purchaseOrder', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  code: {
    type: _sequelize["default"].TEXT
  },
  description: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

PurchaseOrder.hasMany(_Document["default"], {
  foreignKey: 'formId',
  sourceKey: 'id'
});

_Document["default"].belongsTo(PurchaseOrder, {
  foreignKey: 'formId',
  sourceKey: 'id'
});

var _default = PurchaseOrder;
exports["default"] = _default;