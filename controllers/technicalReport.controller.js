"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTechnicalReports = getTechnicalReports;
exports.getTechnicalReport = getTechnicalReport;
exports.getTR = getTR;
exports.createTechnicalReport = createTechnicalReport;
exports.updateTechnicalReport = updateTechnicalReport;
exports.deleteTechnicalReport = deleteTechnicalReport;

var _TechnicalReport = _interopRequireDefault(require("../models/TechnicalReport"));

var _Document = _interopRequireDefault(require("../models/Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTechnicalReports(_x, _x2) {
  return _getTechnicalReports.apply(this, arguments);
}

function _getTechnicalReports() {
  _getTechnicalReports = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var technicalReports;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _TechnicalReport["default"].findAll();

          case 3:
            technicalReports = _context.sent;
            res.json({
              technicalReports: technicalReports
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
  return _getTechnicalReports.apply(this, arguments);
}

function getTechnicalReport(_x3, _x4) {
  return _getTechnicalReport.apply(this, arguments);
}

function _getTechnicalReport() {
  _getTechnicalReport = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, technicalReport;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _TechnicalReport["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            technicalReport = _context2.sent;
            res.json({
              technicalReport: technicalReport
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
  return _getTechnicalReport.apply(this, arguments);
}

function getTR(_x5, _x6) {
  return _getTR.apply(this, arguments);
}

function _getTR() {
  _getTR = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, technicalReport;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _TechnicalReport["default"].findOne({
              where: {
                id: id
              },
              include: [{
                model: _Document["default"],
                as: 'documents',
                required: false,
                // Pass in the Document attributes that you want to retrieve
                attributes: ['id', 'name', 'type', 'src', 'status', 'createDate']
              }]
            });

          case 4:
            technicalReport = _context3.sent;
            res.json({
              technicalReport: technicalReport
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
  return _getTR.apply(this, arguments);
}

function createTechnicalReport(_x7, _x8) {
  return _createTechnicalReport.apply(this, arguments);
}

function _createTechnicalReport() {
  _createTechnicalReport = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, background, acquisitionObjetive, testInspection, supportDocument, technicalQuarantee, technicalService, placeDelivery, deliveryTerm, price, newTechnicalReport;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, background = _req$body.background, acquisitionObjetive = _req$body.acquisitionObjetive, testInspection = _req$body.testInspection, supportDocument = _req$body.supportDocument, technicalQuarantee = _req$body.technicalQuarantee, technicalService = _req$body.technicalService, placeDelivery = _req$body.placeDelivery, deliveryTerm = _req$body.deliveryTerm, price = _req$body.price;
            _context4.prev = 1;
            _context4.next = 4;
            return _TechnicalReport["default"].create({
              background: background,
              acquisitionObjetive: acquisitionObjetive,
              testInspection: testInspection,
              supportDocument: supportDocument,
              technicalQuarantee: technicalQuarantee,
              technicalService: technicalService,
              placeDelivery: placeDelivery,
              deliveryTerm: deliveryTerm,
              price: price
            }, {
              fields: ["background", "acquisitionObjetive", "testInspection", "supportDocument", "technicalQuarantee", "technicalService", "placeDelivery", "deliveryTerm", "price"]
            });

          case 4:
            newTechnicalReport = _context4.sent;

            if (!newTechnicalReport) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: "TechnicalReport Created",
              technicalReport: newTechnicalReport
            }));

          case 7:
            _context4.next = 13;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 9]]);
  }));
  return _createTechnicalReport.apply(this, arguments);
}

function updateTechnicalReport(_x9, _x10) {
  return _updateTechnicalReport.apply(this, arguments);
}

function _updateTechnicalReport() {
  _updateTechnicalReport = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, background, acquisitionObjetive, testInspection, supportDocument, technicalQuarantee, technicalService, placeDelivery, deliveryTerm, price, technicalReports;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, background = _req$body2.background, acquisitionObjetive = _req$body2.acquisitionObjetive, testInspection = _req$body2.testInspection, supportDocument = _req$body2.supportDocument, technicalQuarantee = _req$body2.technicalQuarantee, technicalService = _req$body2.technicalService, placeDelivery = _req$body2.placeDelivery, deliveryTerm = _req$body2.deliveryTerm, price = _req$body2.price;
            _context6.prev = 2;
            _context6.next = 5;
            return _TechnicalReport["default"].findAll({
              attributes: ['id', 'background', 'acquisitionObjetive', 'testInspection', 'supportDocument', 'technicalQuarantee', 'technicalService', 'placeDelivery', 'deliveryTerm', 'price'],
              where: {
                id: id
              }
            });

          case 5:
            technicalReports = _context6.sent;

            if (technicalReports.length > 0) {
              technicalReports.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(technicalReport) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return technicalReport.update({
                            background: background,
                            acquisitionObjetive: acquisitionObjetive,
                            testInspection: testInspection,
                            supportDocument: supportDocument,
                            technicalQuarantee: technicalQuarantee,
                            technicalService: technicalService,
                            placeDelivery: placeDelivery,
                            deliveryTerm: deliveryTerm,
                            price: price
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x13) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: "TechnicalReport Updated Succesfully",
              technicalReport: technicalReports
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](2);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context6.t0);

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 10]]);
  }));
  return _updateTechnicalReport.apply(this, arguments);
}

function deleteTechnicalReport(_x11, _x12) {
  return _deleteTechnicalReport.apply(this, arguments);
}

function _deleteTechnicalReport() {
  _deleteTechnicalReport = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.prev = 1;
            _context7.next = 4;
            return _TechnicalReport["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context7.sent;
            res.json({
              message: "TechnicalReport Deleted Succesfully",
              count: deleteRowCount
            });
            _context7.next = 12;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](1);
            res.status(500).json({
              message: "Something goes wrong"
            });
            console.log(_context7.t0);

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 8]]);
  }));
  return _deleteTechnicalReport.apply(this, arguments);
}