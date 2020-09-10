"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Document = _interopRequireDefault(require("./Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProposalComparison = _database.sequelize.define('proposalComparison', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  code: {
    type: _sequelize["default"].TEXT
  },
  provider: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

ProposalComparison.hasMany(_Document["default"], {
  foreignKey: 'formId',
  sourceKey: 'id'
});

_Document["default"].belongsTo(ProposalComparison, {
  foreignKey: 'formId',
  sourceKey: 'id'
});

var _default = ProposalComparison;
exports["default"] = _default;