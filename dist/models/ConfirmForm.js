"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ConfirmForm = _database.sequelize.define('confirmForm', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  userId: {
    type: _sequelize["default"].UUID
  },
  codeRequest: {
    type: _sequelize["default"].UUID
  },
  dateAt: {
    type: _sequelize["default"].DATE
  },
  observation: {
    type: _sequelize["default"].TEXT
  },
  refuse: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

_User["default"].hasMany(ConfirmForm, {
  foreignKey: 'userId',
  sourceKey: 'id'
});

ConfirmForm.belongsTo(_User["default"], {
  foreignKey: 'userId',
  sourceKey: 'id'
});
var _default = ConfirmForm;
exports["default"] = _default;