"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Product = _database.sequelize.define('product', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  quantity: {
    type: _sequelize["default"].TEXT
  },
  price: {
    type: _sequelize["default"].DECIMAL
  },
  requestId: {
    type: _sequelize["default"].UUID
  }
}, {
  timestamps: false
});

var _default = Product;
exports["default"] = _default;