"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Role = _interopRequireDefault(require("./Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Procedure = _database.sequelize.define('procedure', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  roleId: {
    type: _sequelize["default"].UUID
  },
  internal: {
    type: _sequelize["default"].BOOLEAN
  },
  procedureName: {
    type: _sequelize["default"].TEXT
  },
  order: {
    type: _sequelize["default"].INTEGER
  },
  category: {
    type: _sequelize["default"].TEXT
  },
  formName: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
}); // Procedure.hasMany(Status, {as:'status', foreignKey:'procedureId', sourceKey: 'id'});


var _default = Procedure;
exports["default"] = _default;