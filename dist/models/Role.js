"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _User = _interopRequireDefault(require("./User"));

var _Procedure = _interopRequireDefault(require("./Procedure"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Role = _database.sequelize.define('role', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  roleName: {
    type: _sequelize["default"].TEXT
  },
  level: {
    type: _sequelize["default"].NUMBER
  }
}, {
  timestamps: false
});

Role.hasMany(_User["default"], {
  foreignKey: 'roleId',
  sourceKey: 'id'
});

_User["default"].belongsTo(Role, {
  foreignKey: 'roleId',
  sourceKey: 'id'
});

Role.hasMany(_Procedure["default"], {
  foreignKey: 'roleId',
  sourceKey: 'id'
});

_Procedure["default"].belongsTo(Role, {
  foreignKey: 'roleId',
  sourceKey: 'id'
});

var _default = Role;
exports["default"] = _default;