"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var User = _database.sequelize.define('user', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  lastname: {
    type: _sequelize["default"].TEXT
  },
  email: {
    type: _sequelize["default"].TEXT
  },
  password: {
    type: _sequelize["default"].TEXT
  },
  access: {
    type: _sequelize["default"].TEXT
  },
  roleId: {
    type: _sequelize["default"].UUID
  },
  positionId: {
    type: _sequelize["default"].UUID
  }
}, {
  timestamps: false
});

var _default = User;
exports["default"] = _default;