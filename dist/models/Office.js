"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Position = _interopRequireDefault(require("./Position"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Office = _database.sequelize.define('office', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  companyId: {
    type: _sequelize["default"].UUID
  },
  supOfficeId: {
    type: _sequelize["default"].UUID
  }
}, {
  timestamps: false
});

Office.hasMany(_Position["default"], {
  foreignKey: 'officeId',
  sourceKey: 'id'
});

_Position["default"].belongsTo(Office, {
  foreignKey: 'officeId',
  sourceKey: 'id'
});

var _default = Office;
exports["default"] = _default;