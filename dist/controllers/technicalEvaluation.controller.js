"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTechnicalEvaluations = getTechnicalEvaluations;
exports.getTechnicalEvaluation = getTechnicalEvaluation;
exports.getTED = getTED;
exports.createTechnicalEvaluation = createTechnicalEvaluation;
exports.updateTechnicalEvaluation = updateTechnicalEvaluation;
exports.deleteTechnicalEvaluation = deleteTechnicalEvaluation;

var _TechnicalEvaluation = _interopRequireDefault(require("../models/TechnicalEvaluation"));

var _Document = _interopRequireDefault(require("../models/Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTechnicalEvaluations(_x, _x2) {
  return _getTechnicalEvaluations.apply(this, arguments);
}

function _getTechnicalEvaluations() {
  _getTechnicalEvaluations = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var technicalEvaluations;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _TechnicalEvaluation["default"].findAll();

          case 3:
            technicalEvaluations = _context.sent;
            res.json({
              technicalEvaluations: technicalEvaluations
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
  return _getTechnicalEvaluations.apply(this, arguments);
}

function getTechnicalEvaluation(_x3, _x4) {
  return _getTechnicalEvaluation.apply(this, arguments);
}

function _getTechnicalEvaluation() {
  _getTechnicalEvaluation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, technicalEvaluation;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _TechnicalEvaluation["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            technicalEvaluation = _context2.sent;
            res.json({
              technicalEvaluation: technicalEvaluation
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
  return _getTechnicalEvaluation.apply(this, arguments);
}

function getTED(_x5, _x6) {
  return _getTED.apply(this, arguments);
}

function _getTED() {
  _getTED = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, technicalEvaluation;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _TechnicalEvaluation["default"].findOne({
              where: {
                id: id
              },
              include: [{
                model: _Document["default"],
                as: 'documents',
                required: false,
                // Pass in the Document attributes that you want to retrieve
                attributes: ['id', 'name', 'type', 'src', 'status', 'createDate', 'fileName']
              }]
            });

          case 4:
            technicalEvaluation = _context3.sent;
            res.json({
              technicalEvaluation: technicalEvaluation
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
  return _getTED.apply(this, arguments);
}

function createTechnicalEvaluation(_x7, _x8) {
  return _createTechnicalEvaluation.apply(this, arguments);
}

function _createTechnicalEvaluation() {
  _createTechnicalEvaluation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, to, via, whose, number, date, newTechnicalEvaluation;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, to = _req$body.to, via = _req$body.via, whose = _req$body.whose, number = _req$body.number, date = _req$body.date;
            _context4.prev = 1;
            _context4.next = 4;
            return _TechnicalEvaluation["default"].create({
              to: to,
              via: via,
              whose: whose,
              number: number,
              date: date
            }, {
              fields: ["to", "via", "whose", "number", "date"]
            });

          case 4:
            newTechnicalEvaluation = _context4.sent;

            if (!newTechnicalEvaluation) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: "TechnicalEvaluation Created",
              technicalEvaluation: newTechnicalEvaluation
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
  return _createTechnicalEvaluation.apply(this, arguments);
}

function updateTechnicalEvaluation(_x9, _x10) {
  return _updateTechnicalEvaluation.apply(this, arguments);
}

function _updateTechnicalEvaluation() {
  _updateTechnicalEvaluation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, to, via, whose, number, date, technicalEvaluations;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, to = _req$body2.to, via = _req$body2.via, whose = _req$body2.whose, number = _req$body2.number, date = _req$body2.date;
            _context6.prev = 2;
            _context6.next = 5;
            return _TechnicalEvaluation["default"].findAll({
              attributes: ['id', 'to', 'via', 'whose', 'number', 'date'],
              where: {
                id: id
              }
            });

          case 5:
            technicalEvaluations = _context6.sent;

            if (technicalEvaluations.length > 0) {
              technicalEvaluations.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(technicalEvaluation) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return technicalEvaluation.update({
                            to: to,
                            via: via,
                            whose: whose,
                            number: number,
                            date: date
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
              message: "TechnicalEvaluation Updated Succesfully",
              technicalEvaluation: technicalEvaluations
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
  return _updateTechnicalEvaluation.apply(this, arguments);
}

function deleteTechnicalEvaluation(_x11, _x12) {
  return _deleteTechnicalEvaluation.apply(this, arguments);
}

function _deleteTechnicalEvaluation() {
  _deleteTechnicalEvaluation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.prev = 1;
            _context7.next = 4;
            return _TechnicalEvaluation["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context7.sent;
            res.json({
              message: "TechnicalEvaluation Deleted Succesfully",
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
  return _deleteTechnicalEvaluation.apply(this, arguments);
}