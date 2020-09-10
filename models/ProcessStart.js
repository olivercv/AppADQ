"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Document = _interopRequireDefault(require("./Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProcessStart = _database.sequelize.define('processStart', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  category: {
    type: _sequelize["default"].TEXT
  },
  startDate: {
    type: _sequelize["default"].DATE
  },
  endDate: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

ProcessStart.hasMany(_Document["default"], {
  foreignKey: 'formId',
  sourceKey: 'id'
});

_Document["default"].belongsTo(ProcessStart, {
  foreignKey: 'formId',
  sourceKey: 'id'
});

var _default = ProcessStart;
exports["default"] = _default;