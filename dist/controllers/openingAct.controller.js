"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOpeningActs = getOpeningActs;
exports.getOpeningAct = getOpeningAct;
exports.getOA = getOA;
exports.createOpeningAct = createOpeningAct;
exports.updateOpeningAct = updateOpeningAct;
exports.deleteOpeningAct = deleteOpeningAct;

var _OpeningAct = _interopRequireDefault(require("../models/OpeningAct"));

var _Document = _interopRequireDefault(require("../models/Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getOpeningActs(_x, _x2) {
  return _getOpeningActs.apply(this, arguments);
}

function _getOpeningActs() {
  _getOpeningActs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var openingActs;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _OpeningAct["default"].findAll();

          case 3:
            openingActs = _context.sent;
            res.json({
              openingActs: openingActs
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
  return _getOpeningActs.apply(this, arguments);
}

function getOpeningAct(_x3, _x4) {
  return _getOpeningAct.apply(this, arguments);
}

function _getOpeningAct() {
  _getOpeningAct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, openingAct;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _OpeningAct["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            openingAct = _context2.sent;
            res.json({
              openingAct: openingAct
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
  return _getOpeningAct.apply(this, arguments);
}

function getOA(_x5, _x6) {
  return _getOA.apply(this, arguments);
}

function _getOA() {
  _getOA = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, openingAct;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _OpeningAct["default"].findOne({
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
            openingAct = _context3.sent;
            res.json({
              openingAct: openingAct
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
  return _getOA.apply(this, arguments);
}

function createOpeningAct(_x7, _x8) {
  return _createOpeningAct.apply(this, arguments);
}

function _createOpeningAct() {
  _createOpeningAct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var codeRequest, newOpeningAct;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            codeRequest = req.body.codeRequest;
            _context4.prev = 1;
            _context4.next = 4;
            return _OpeningAct["default"].create({
              codeRequest: codeRequest
            }, {
              fields: ["codeRequest"]
            });

          case 4:
            newOpeningAct = _context4.sent;

            if (!newOpeningAct) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: "OpeningAct Created",
              openingAct: newOpeningAct
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
  return _createOpeningAct.apply(this, arguments);
}

function updateOpeningAct(_x9, _x10) {
  return _updateOpeningAct.apply(this, arguments);
}

function _updateOpeningAct() {
  _updateOpeningAct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, codeRequest, openingActs;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            codeRequest = req.body.codeRequest;
            _context6.prev = 2;
            _context6.next = 5;
            return _OpeningAct["default"].findAll({
              attributes: ['id', 'codeRequest'],
              where: {
                id: id
              }
            });

          case 5:
            openingActs = _context6.sent;

            if (openingActs.length > 0) {
              openingActs.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(openingAct) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return openingAct.update({
                            codeRequest: codeRequest
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
              message: "OpeningAct Updated Succesfully",
              openingAct: openingActs
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
  return _updateOpeningAct.apply(this, arguments);
}

function deleteOpeningAct(_x11, _x12) {
  return _deleteOpeningAct.apply(this, arguments);
}

function _deleteOpeningAct() {
  _deleteOpeningAct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.prev = 1;
            _context7.next = 4;
            return _OpeningAct["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context7.sent;
            res.json({
              message: "OpeningAct Deleted Succesfully",
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
  return _deleteOpeningAct.apply(this, arguments);
}