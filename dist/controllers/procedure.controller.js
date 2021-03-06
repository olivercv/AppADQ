"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProcedures = getProcedures;
exports.getProcedure = getProcedure;
exports.getProcedureByOrder = getProcedureByOrder;
exports.getProcedureByCategoryOrder = getProcedureByCategoryOrder;
exports.getProcedureStatus = getProcedureStatus;
exports.createProcedure = createProcedure;
exports.updateProcedure = updateProcedure;
exports.deleteProcedure = deleteProcedure;

var _Procedure = _interopRequireDefault(require("../models/Procedure"));

var _Status = _interopRequireDefault(require("../models/Status"));

var _Role = _interopRequireDefault(require("../models/Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getProcedures(_x, _x2) {
  return _getProcedures.apply(this, arguments);
}

function _getProcedures() {
  _getProcedures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var procedures;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Procedure["default"].findAll({
              include: [{
                model: _Role["default"],
                as: 'role'
              }],
              order: [['order']]
            });

          case 3:
            procedures = _context.sent;
            // console.log('resultados procedimientos ',res);
            res.json({
              procedures: procedures
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
  return _getProcedures.apply(this, arguments);
}

function getProcedure(_x3, _x4) {
  return _getProcedure.apply(this, arguments);
} // export async function getProcedureStatus(req, res) {
//   const { id } = req.params;
//   try {
//     const procedure = await Procedure.findAll({
//       where: {
//         positionId: id,
//       },
//       include: [{
//         model: Status,
//         as: 'status',
//         required: false,
//       // Pass in the Product attributes that you want to retrieve
//         attributes: ['id', 'procedureId','userId','status','dateAt','current','codeRequest', 'formId', 'name']
//       }]
//     });
//     res.json({
//       procedure: procedure,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Something goes wrong",
//       data: {},
//     });
//     console.log(error);
//   }
// }


function _getProcedure() {
  _getProcedure = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, procedure;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Procedure["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            procedure = _context2.sent;
            res.json({
              procedure: procedure
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getProcedure.apply(this, arguments);
}

function getProcedureByOrder(_x5, _x6) {
  return _getProcedureByOrder.apply(this, arguments);
}

function _getProcedureByOrder() {
  _getProcedureByOrder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var order, procedure;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            order = req.params.order;
            _context3.prev = 1;
            _context3.next = 4;
            return _Procedure["default"].findOne({
              where: {
                order: order
              }
            });

          case 4:
            procedure = _context3.sent;
            res.json({
              procedure: procedure
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _getProcedureByOrder.apply(this, arguments);
}

function getProcedureByCategoryOrder(_x7, _x8) {
  return _getProcedureByCategoryOrder.apply(this, arguments);
}

function _getProcedureByCategoryOrder() {
  _getProcedureByCategoryOrder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$params, category, order, procedure;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$params = req.params, category = _req$params.category, order = _req$params.order;
            _context4.prev = 1;
            _context4.next = 4;
            return _Procedure["default"].findOne({
              where: {
                category: category,
                order: order
              }
            });

          case 4:
            procedure = _context4.sent;
            res.json({
              procedure: procedure
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _getProcedureByCategoryOrder.apply(this, arguments);
}

function getProcedureStatus(_x9, _x10) {
  return _getProcedureStatus.apply(this, arguments);
}

function _getProcedureStatus() {
  _getProcedureStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var roleId, procedure;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            roleId = req.params.roleId;
            _context5.prev = 1;
            _context5.next = 4;
            return _Procedure["default"].findAll({
              where: {
                roleId: roleId
              },
              include: [{
                model: _Status["default"],
                as: 'status',
                required: false,
                where: {
                  current: true
                },
                // Pass in the Product attributes that you want to retrieve
                attributes: ['id', 'roleId', 'userId', 'status', 'dateAt', 'current', 'codeRequest', 'formId', 'name']
              }]
            });

          case 4:
            procedure = _context5.sent;
            res.json({
              procedure: procedure
            });
            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context5.t0);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return _getProcedureStatus.apply(this, arguments);
}

function createProcedure(_x11, _x12) {
  return _createProcedure.apply(this, arguments);
}

function _createProcedure() {
  _createProcedure = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$body, roleId, internal, procedureName, order, category, formName, newProcedure;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body = req.body, roleId = _req$body.roleId, internal = _req$body.internal, procedureName = _req$body.procedureName, order = _req$body.order, category = _req$body.category, formName = _req$body.formName;
            _context6.prev = 1;
            _context6.next = 4;
            return _Procedure["default"].create({
              roleId: roleId,
              internal: internal,
              procedureName: procedureName,
              order: order,
              category: category,
              formName: formName
            }, {
              fields: ["roleId", "internal", "procedureName", "order", "category", "formName"]
            });

          case 4:
            newProcedure = _context6.sent;

            if (!newProcedure) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", res.json({
              message: "Procedure Created",
              procedure: newProcedure
            }));

          case 7:
            _context6.next = 13;
            break;

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](1);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context6.t0);

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 9]]);
  }));
  return _createProcedure.apply(this, arguments);
}

function updateProcedure(_x13, _x14) {
  return _updateProcedure.apply(this, arguments);
}

function _updateProcedure() {
  _updateProcedure = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var id, _req$body2, roleId, internal, procedureName, order, category, formName, procedures;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, roleId = _req$body2.roleId, internal = _req$body2.internal, procedureName = _req$body2.procedureName, order = _req$body2.order, category = _req$body2.category, formName = _req$body2.formName;
            _context8.prev = 2;
            _context8.next = 5;
            return _Procedure["default"].findAll({
              attributes: ['id', 'roleId', 'internal', 'procedureName', 'order', 'category', 'formName'],
              where: {
                id: id
              }
            });

          case 5:
            procedures = _context8.sent;

            if (procedures.length > 0) {
              procedures.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(procedure) {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return procedure.update({
                            roleId: roleId,
                            internal: internal,
                            procedureName: procedureName,
                            order: order,
                            category: category,
                            formName: formName
                          });

                        case 2:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function (_x17) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context8.abrupt("return", res.json({
              message: "Procedure Updated Succesfully",
              procedure: procedures
            }));

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](2);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context8.t0);

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 10]]);
  }));
  return _updateProcedure.apply(this, arguments);
}

function deleteProcedure(_x15, _x16) {
  return _deleteProcedure.apply(this, arguments);
}

function _deleteProcedure() {
  _deleteProcedure = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id = req.params.id;
            _context9.prev = 1;
            _context9.next = 4;
            return _Procedure["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context9.sent;
            res.json({
              message: "Procedure Deleted Succesfully",
              count: deleteRowCount
            });
            _context9.next = 12;
            break;

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](1);
            res.status(500).json({
              message: "Something goes wrong"
            });
            console.log(_context9.t0);

          case 12:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 8]]);
  }));
  return _deleteProcedure.apply(this, arguments);
}