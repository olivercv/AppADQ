"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Document = _interopRequireDefault(require("./Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TechnicalEvaluation = _database.sequelize.define('technicalEvaluation', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  to: {
    type: _sequelize["default"].TEXT
  },
  via: {
    type: _sequelize["default"].TEXT
  },
  whose: {
    type: _sequelize["default"].TEXT
  },
  number: {
    type: _sequelize["default"].TEXT
  },
  date: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

TechnicalEvaluation.hasMany(_Document["default"], {
  foreignKey: 'formId',
  sourceKey: 'id'
});

_Document["default"].belongsTo(TechnicalEvaluation, {
  foreignKey: 'formId',
  sourceKey: 'id'
});

var _default = TechnicalEvaluation;
exports["default"] = _default;