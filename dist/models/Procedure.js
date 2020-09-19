"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Status from './Status';
var Procedure = _database.sequelize.define('procedure', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  positionId: {
    type: _sequelize["default"].UUID
  },
  procedureName: {
    type: _sequelize["default"].TEXT
  },
  order: {
    type: _sequelize["default"].INTEGER
  },
  category: {
    type: _sequelize["default"].INTEGER
  },
  formName: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
}); // Procedure.hasMany(Status, {as:'status', foreignKey:'procedureId', sourceKey: 'id'});


var _default = Procedure;
exports["default"] = _default;