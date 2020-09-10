"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Office = _interopRequireDefault(require("./Office"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Company = _database.sequelize.define('company', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  direction: {
    type: _sequelize["default"].TEXT
  },
  nit: {
    type: _sequelize["default"].TEXT
  },
  email: {
    type: _sequelize["default"].TEXT
  },
  phone: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

Company.hasMany(_Office["default"], {
  foreignKey: 'companyId',
  sourceKey: 'id'
});

_Office["default"].belongsTo(Company, {
  foreignKey: 'companyId',
  sourceKey: 'id'
});

var _default = Company;
exports["default"] = _default;