"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Document = _database.sequelize.define('document', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  type: {
    type: _sequelize["default"].TEXT
  },
  formId: {
    type: _sequelize["default"].UUID
  },
  src: {
    type: _sequelize["default"].TEXT
  },
  status: {
    type: _sequelize["default"].TEXT
  },
  createDate: {
    type: _sequelize["default"].DATE
  },
  fileName: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

var _default = Document;
exports["default"] = _default;