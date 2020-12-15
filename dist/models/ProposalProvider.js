"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Document = _interopRequireDefault(require("./Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProposalProvider = _database.sequelize.define('proposalProvider', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  economicProposal: {
    type: _sequelize["default"].NUMBER
  },
  date: {
    type: _sequelize["default"].DATE
  },
  formId: {
    type: _sequelize["default"].UUID
  },
  warranty: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

ProposalProvider.hasMany(_Document["default"], {
  foreignKey: 'formId',
  sourceKey: 'id'
});

_Document["default"].belongsTo(ProposalProvider, {
  foreignKey: 'formId',
  sourceKey: 'id'
});

var _default = ProposalProvider;
exports["default"] = _default;