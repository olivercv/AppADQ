"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatuss = getStatuss;
exports.getStatusByRequest = getStatusByRequest;
exports.getStatusByRequestForm = getStatusByRequestForm;
exports.getStatusByRequestAndProcedure = getStatusByRequestAndProcedure;
exports.getCurrentStatus = getCurrentStatus;
exports.getStatusPositionId = getStatusPositionId;
exports.getStatusByUserId = getStatusByUserId;
exports.getStatus = getStatus;
exports.createStatus = createStatus;
exports.updateStatus = updateStatus;
exports.deleteStatus = deleteStatus;

var _Status = _interopRequireDefault(require("../models/Status"));

var _Procedure = _interopRequireDefault(require("../models/Procedure"));

var _AcquisitionRequest = _interopRequireDefault(require("../models/AcquisitionRequest"));

var _BudgetCertification = _interopRequireDefault(require("../models/BudgetCertification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    Op = _require.Op;

function getStatuss(_x, _x2) {
  return _getStatuss.apply(this, arguments);
}

function _getStatuss() {
  _getStatuss = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var statuss;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Status["default"].findAll({
              include: [{
                model: _Procedure["default"],
                as: 'procedure'
              }, {
                model: _AcquisitionRequest["default"],
                as: 'acquisitionRequest'
              }]
            });

          case 3:
            statuss = _context.sent;
            res.json({
              status: statuss
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getStatuss.apply(this, arguments);
}

function getStatusByRequest(_x3, _x4) {
  return _getStatusByRequest.apply(this, arguments);
}

function _getStatusByRequest() {
  _getStatusByRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var codeRequest, statuss;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            codeRequest = req.params.codeRequest;
            _context2.prev = 1;
            _context2.next = 4;
            return _Status["default"].findAll({
              where: {
                codeRequest: codeRequest
              },
              raw: true,
              order: [['dateAt']],
              include: [{
                model: _Procedure["default"],
                as: 'procedure'
              }]
            });

          case 4:
            statuss = _context2.sent;
            res.json({
              status: statuss
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getStatusByRequest.apply(this, arguments);
}

function getStatusByRequestForm(_x5, _x6) {
  return _getStatusByRequestForm.apply(this, arguments);
}

function _getStatusByRequestForm() {
  _getStatusByRequestForm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var codeRequest, statuss;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            codeRequest = req.params.codeRequest;
            _context3.prev = 1;
            _context3.next = 4;
            return _Status["default"].findAll({
              where: {
                codeRequest: codeRequest,
                status: 'enviado'
              }
            });

          case 4:
            statuss = _context3.sent;
            res.json({
              status: statuss
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _getStatusByRequestForm.apply(this, arguments);
}

function getStatusByRequestAndProcedure(_x7, _x8) {
  return _getStatusByRequestAndProcedure.apply(this, arguments);
}

function _getStatusByRequestAndProcedure() {
  _getStatusByRequestAndProcedure = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$params, codeRequest, procedureId, statuss;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$params = req.params, codeRequest = _req$params.codeRequest, procedureId = _req$params.procedureId;
            _context4.prev = 1;
            _context4.next = 4;
            return _Status["default"].findAll({
              where: {
                codeRequest: codeRequest,
                procedureId: procedureId
              }
            });

          case 4:
            statuss = _context4.sent;
            res.json({
              status: statuss
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _getStatusByRequestAndProcedure.apply(this, arguments);
}

function getCurrentStatus(_x9, _x10) {
  return _getCurrentStatus.apply(this, arguments);
} // status por positon Id


function _getCurrentStatus() {
  _getCurrentStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var codeRequest, current, status;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            codeRequest = req.params.codeRequest; // console.log('paramtros', req.params);

            current = true;
            _context5.prev = 2;
            _context5.next = 5;
            return _Status["default"].findOne({
              where: {
                codeRequest: codeRequest,
                current: current
              },
              include: [{
                model: _Procedure["default"],
                as: 'procedure',
                required: false,
                attributes: ['id', 'positionId', 'procedureName', 'order']
              }, {
                model: _AcquisitionRequest["default"],
                as: 'acquisitionRequest'
              }]
            });

          case 5:
            status = _context5.sent;
            res.json({
              status: status
            });
            _context5.next = 13;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](2);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context5.t0);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 9]]);
  }));
  return _getCurrentStatus.apply(this, arguments);
}

function getStatusPositionId(_x11, _x12) {
  return _getStatusPositionId.apply(this, arguments);
} // status por userId


function _getStatusPositionId() {
  _getStatusPositionId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$params2, id, procedureId, userId, status;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$params2 = req.params, id = _req$params2.id, procedureId = _req$params2.procedureId, userId = _req$params2.userId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Status["default"].findAll({
              where: _defineProperty({}, Op.or, [{
                userId: userId
              }, {
                current: true
              }]),
              include: [{
                model: _Procedure["default"],
                where: _defineProperty({}, Op.or, [{
                  positionId: id
                }, {
                  positionId: null
                }])
              }, {
                model: _AcquisitionRequest["default"],
                as: 'acquisitionRequest'
              }]
            });

          case 4:
            status = _context6.sent;
            res.json({
              status: status
            });
            _context6.next = 12;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            res.status(500).json({
              message: "Something goes wrong" + _context6.t0,
              data: {}
            });
            console.log(_context6.t0);

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return _getStatusPositionId.apply(this, arguments);
}

function getStatusByUserId(_x13, _x14) {
  return _getStatusByUserId.apply(this, arguments);
}

function _getStatusByUserId() {
  _getStatusByUserId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var _req$body, userId, startDate, endDate, status;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body = req.body, userId = _req$body.userId, startDate = _req$body.startDate, endDate = _req$body.endDate;
            console.log('ingresó ', req.body);
            _context7.prev = 2;
            _context7.next = 5;
            return _Status["default"].findAll({
              where: {
                userId: userId,
                dateAt: _defineProperty({}, Op.between, [startDate, endDate]),
                current: false
              },
              include: [{
                model: _Procedure["default"],
                as: 'procedure'
              }, {
                model: _AcquisitionRequest["default"],
                as: 'acquisitionRequest'
              }],
              logging: console.log,
              raw: true,
              order: [['dateAt', 'ASC']]
            });

          case 5:
            status = _context7.sent;
            res.json({
              status: status
            });
            _context7.next = 13;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](2);
            res.status(500).json({
              message: "Something goes wrong" + _context7.t0,
              data: {}
            });
            console.log(_context7.t0);

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 9]]);
  }));
  return _getStatusByUserId.apply(this, arguments);
}

function getStatus(_x15, _x16) {
  return _getStatus.apply(this, arguments);
}

function _getStatus() {
  _getStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var id, status;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = req.params.id;
            _context8.prev = 1;
            _context8.next = 4;
            return _Status["default"].findOne({
              where: {
                id: id
              },
              include: [{
                model: _Procedure["default"],
                as: 'procedure'
              }, {
                model: _AcquisitionRequest["default"],
                as: 'acquisitionRequest'
              }]
            });

          case 4:
            status = _context8.sent;
            res.json({
              status: status
            });
            _context8.next = 12;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](1);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context8.t0);

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 8]]);
  }));
  return _getStatus.apply(this, arguments);
}

function createStatus(_x17, _x18) {
  return _createStatus.apply(this, arguments);
}

function _createStatus() {
  _createStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var _req$body2, procedureId, userId, formId, status, dateAt, current, codeRequest, name, newStatus;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body2 = req.body, procedureId = _req$body2.procedureId, userId = _req$body2.userId, formId = _req$body2.formId, status = _req$body2.status, dateAt = _req$body2.dateAt, current = _req$body2.current, codeRequest = _req$body2.codeRequest, name = _req$body2.name;
            _context9.prev = 1;
            _context9.next = 4;
            return _Status["default"].create({
              procedureId: procedureId,
              userId: userId,
              formId: formId,
              status: status,
              dateAt: dateAt,
              current: current,
              codeRequest: codeRequest,
              name: name
            }, {
              fields: ["procedureId", "userId", "formId", "status", "dateAt", "current", "codeRequest", "name"]
            });

          case 4:
            newStatus = _context9.sent;

            if (!newStatus) {
              _context9.next = 7;
              break;
            }

            return _context9.abrupt("return", res.json({
              message: "Status Created",
              status: newStatus
            }));

          case 7:
            _context9.next = 13;
            break;

          case 9:
            _context9.prev = 9;
            _context9.t0 = _context9["catch"](1);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context9.t0);

          case 13:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 9]]);
  }));
  return _createStatus.apply(this, arguments);
}

function updateStatus(_x19, _x20) {
  return _updateStatus.apply(this, arguments);
}

function _updateStatus() {
  _updateStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var id, _req$body3, procedureId, userId, formId, status, dateAt, current, codeRequest, name, statuss;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            id = req.params.id;
            _req$body3 = req.body, procedureId = _req$body3.procedureId, userId = _req$body3.userId, formId = _req$body3.formId, status = _req$body3.status, dateAt = _req$body3.dateAt, current = _req$body3.current, codeRequest = _req$body3.codeRequest, name = _req$body3.name;
            _context11.prev = 2;
            _context11.next = 5;
            return _Status["default"].findAll({
              attributes: ['id', 'procedureId', 'userId', 'formId', 'status', 'dateAt', 'current', 'codeRequest', 'name'],
              where: {
                id: id
              }
            });

          case 5:
            statuss = _context11.sent;

            if (statuss.length > 0) {
              statuss.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(status1) {
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          _context10.next = 2;
                          return status1.update({
                            procedureId: procedureId,
                            userId: userId,
                            formId: formId,
                            status: status,
                            dateAt: dateAt,
                            current: current,
                            codeRequest: codeRequest,
                            name: name
                          });

                        case 2:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10);
                }));

                return function (_x23) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context11.abrupt("return", res.json({
              message: "Status Updated Succesfully",
              status: statuss[0]
            }));

          case 10:
            _context11.prev = 10;
            _context11.t0 = _context11["catch"](2);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context11.t0);

          case 14:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[2, 10]]);
  }));
  return _updateStatus.apply(this, arguments);
}

function deleteStatus(_x21, _x22) {
  return _deleteStatus.apply(this, arguments);
}

function _deleteStatus() {
  _deleteStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            id = req.params.id;
            _context12.prev = 1;
            _context12.next = 4;
            return _Status["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context12.sent;
            res.json({
              message: "Status Deleted Succesfully",
              count: deleteRowCount
            });
            _context12.next = 12;
            break;

          case 8:
            _context12.prev = 8;
            _context12.t0 = _context12["catch"](1);
            res.status(500).json({
              message: "Something goes wrong"
            });
            console.log(_context12.t0);

          case 12:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[1, 8]]);
  }));
  return _deleteStatus.apply(this, arguments);
}