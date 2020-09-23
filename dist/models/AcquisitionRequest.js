"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Product = _interopRequireDefault(require("./Product"));

var _AdmCondition = _interopRequireDefault(require("./AdmCondition"));

var _Document = _interopRequireDefault(require("./Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AcquisitionRequest = _database.sequelize.define('acquisitionRequest', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  code: {
    type: _sequelize["default"].TEXT
  },
  version: {
    type: _sequelize["default"].TEXT
  },
  validity: {
    type: _sequelize["default"].DATE
  },
  numRequest: {
    type: _sequelize["default"].TEXT
  },
  requestDate: {
    type: _sequelize["default"].DATE
  },
  nPac: {
    type: _sequelize["default"].TEXT
  },
  place: {
    type: _sequelize["default"].TEXT
  },
  question1: {
    type: _sequelize["default"].TEXT
  },
  question2: {
    type: _sequelize["default"].TEXT
  },
  question3: {
    type: _sequelize["default"].TEXT
  },
  coin: {
    type: _sequelize["default"].TEXT
  },
  title: {
    type: _sequelize["default"].TEXT
  },
  category: {
    type: _sequelize["default"].TEXT
  },
  selectionMethod: {
    type: _sequelize["default"].TEXT
  },
  descriptionTitle: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

AcquisitionRequest.hasMany(_Product["default"], {
  foreignKey: 'requestId',
  sourceKey: 'id'
});

_Product["default"].belongsTo(AcquisitionRequest, {
  foreignKey: 'requestId',
  sourceKey: 'id'
});

AcquisitionRequest.hasMany(_AdmCondition["default"], {
  foreignKey: 'requestId',
  sourceKey: 'id'
});

_AdmCondition["default"].belongsTo(AcquisitionRequest, {
  foreignKey: 'requestId',
  sourceKey: 'id'
});

AcquisitionRequest.hasMany(_Document["default"], {
  foreignKey: 'formId',
  sourceKey: 'id'
});

_Document["default"].belongsTo(AcquisitionRequest, {
  foreignKey: 'formId',
  sourceKey: 'id'
});

var _default = AcquisitionRequest;
exports["default"] = _default;