"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _ProposalProvider = _interopRequireDefault(require("./ProposalProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProposalEvaluation = _database.sequelize.define('proposalEvaluation', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  code: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

ProposalEvaluation.hasMany(_ProposalProvider["default"], {
  foreignKey: 'formId',
  sourceKey: 'id'
});

_ProposalProvider["default"].belongsTo(ProposalEvaluation, {
  foreignKey: 'formId',
  sourceKey: 'id'
});

var _default = ProposalEvaluation;
exports["default"] = _default;