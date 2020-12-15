"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AdmCondition = _database.sequelize.define('admCondition', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  priority: {
    type: _sequelize["default"].TEXT
  },
  type: {
    type: _sequelize["default"].TEXT
  },
  warranty: {
    type: _sequelize["default"].TEXT
  },
  deliveryTime: {
    type: _sequelize["default"].TEXT
  },
  placeDelivery: {
    type: _sequelize["default"].TEXT
  },
  posibleProviders: {
    type: _sequelize["default"].TEXT
  },
  requestId: {
    type: _sequelize["default"].UUID
  }
}, {
  timestamps: false
});

var _default = AdmCondition;
exports["default"] = _default;