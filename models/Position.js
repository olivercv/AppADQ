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

// import Office from './Office';
var Position = _database.sequelize.define('position', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  officeId: {
    type: _sequelize["default"].UUID
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  active: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
}); // Office.hasMany(Position, {foreignKey:'officeId', sourceKey: 'id'});
// Position.belongsTo(Office, {foreignKey: 'officeId', sourceKey: 'id'});


Position.hasMany(_User["default"], {
  foreignKey: 'positionId',
  sourceKey: 'id'
});

_User["default"].belongsTo(Position, {
  foreignKey: 'positionId',
  sourceKey: 'id'
});

Position.hasMany(_Procedure["default"], {
  foreignKey: 'positionId',
  sourceKey: 'id'
});

_Procedure["default"].belongsTo(Position, {
  foreignKey: 'positionId',
  sourceKey: 'id'
});

var _default = Position;
exports["default"] = _default;