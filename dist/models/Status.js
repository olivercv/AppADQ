"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _AcquisitionRequest = _interopRequireDefault(require("./AcquisitionRequest"));

var _TechnicalReport = _interopRequireDefault(require("./TechnicalReport"));

var _BudgetCertification = _interopRequireDefault(require("./BudgetCertification"));

var _Procedure = _interopRequireDefault(require("./Procedure"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Status = _database.sequelize.define('status', {
  id: {
    type: _sequelize["default"].UUID,
    primaryKey: true
  },
  procedureId: {
    type: _sequelize["default"].UUID
  },
  userId: {
    type: _sequelize["default"].UUID
  },
  formId: {
    type: _sequelize["default"].UUID
  },
  status: {
    type: _sequelize["default"].TEXT
  },
  dateAt: {
    type: _sequelize["default"].DATE
  },
  current: {
    type: _sequelize["default"].BOOLEAN
  },
  codeRequest: {
    type: _sequelize["default"].UUID
  },
  name: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true
});

_AcquisitionRequest["default"].hasMany(Status, {
  as: 'status',
  foreignKey: 'codeRequest',
  sourceKey: 'id'
});

Status.belongsTo(_AcquisitionRequest["default"], {
  foreignKey: 'codeRequest',
  sourceKey: 'id'
});

_TechnicalReport["default"].hasMany(Status, {
  foreignKey: 'formId',
  sourceKey: 'id'
});

Status.belongsTo(_TechnicalReport["default"], {
  foreignKey: 'formId',
  sourceKey: 'id'
});

_BudgetCertification["default"].hasMany(Status, {
  foreignKey: 'formId',
  sourceKey: 'id'
});

Status.belongsTo(_BudgetCertification["default"], {
  foreignKey: 'formId',
  sourceKey: 'id'
});

_Procedure["default"].hasMany(Status, {
  as: 'status',
  foreignKey: 'procedureId',
  sourceKey: 'id'
});

Status.belongsTo(_Procedure["default"], {
  foreignKey: 'procedureId',
  sourceKey: 'id'
});
var _default = Status;
exports["default"] = _default;