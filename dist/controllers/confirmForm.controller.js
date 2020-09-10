"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfirmations = getConfirmations;
exports.getConfirmation = getConfirmation;
exports.getConf = getConf;
exports.createConfirmation = createConfirmation;
exports.updateConfirmation = updateConfirmation;
exports.deleteConfirmation = deleteConfirmation;

var _ConfirmForm = _interopRequireDefault(require("../models/ConfirmForm"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getConfirmations(_x, _x2) {
  return _getConfirmations.apply(this, arguments);
}

function _getConfirmations() {
  _getConfirmations = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var confirmations;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _ConfirmForm["default"].findAll();

          case 3:
            confirmations = _context.sent;
            res.json({
              confirmations: confirmations
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
  return _getConfirmations.apply(this, arguments);
}

function getConfirmation(_x3, _x4) {
  return _getConfirmation.apply(this, arguments);
}

function _getConfirmation() {
  _getConfirmation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, confirmation;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _ConfirmForm["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            confirmation = _context2.sent;
            res.json({
              confirmation: confirmation
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
  return _getConfirmation.apply(this, arguments);
}

function getConf(_x5, _x6) {
  return _getConf.apply(this, arguments);
}

function _getConf() {
  _getConf = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, confirmation;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _ConfirmForm["default"].findOne({
              where: {
                id: id
              },
              include: [{
                model: _User["default"],
                as: 'user',
                required: false,
                attributes: ['id', 'name', 'lastname', 'positionId']
              }]
            });

          case 4:
            confirmation = _context3.sent;
            res.json({
              confirmation: confirmation
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
  return _getConf.apply(this, arguments);
}

function createConfirmation(_x7, _x8) {
  return _createConfirmation.apply(this, arguments);
}

function _createConfirmation() {
  _createConfirmation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, userId, dateAt, observation, refuse, codeRequest, newConfirmation;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, userId = _req$body.userId, dateAt = _req$body.dateAt, observation = _req$body.observation, refuse = _req$body.refuse, codeRequest = _req$body.codeRequest;
            console.log('datos ', req.body);
            _context4.prev = 2;
            _context4.next = 5;
            return _ConfirmForm["default"].create({
              userId: userId,
              codeRequest: codeRequest,
              dateAt: dateAt,
              observation: observation,
              refuse: refuse
            }, {
              fields: ["userId", "codeRequest", "dateAt", "observation", "refuse"]
            });

          case 5:
            newConfirmation = _context4.sent;

            if (!newConfirmation) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: "Confirmation Created",
              confirmation: newConfirmation
            }));

          case 8:
            _context4.next = 14;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](2);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context4.t0);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 10]]);
  }));
  return _createConfirmation.apply(this, arguments);
}

function updateConfirmation(_x9, _x10) {
  return _updateConfirmation.apply(this, arguments);
}

function _updateConfirmation() {
  _updateConfirmation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, userId, dateAt, observation, refuse, codeRequest, confirmations;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, userId = _req$body2.userId, dateAt = _req$body2.dateAt, observation = _req$body2.observation, refuse = _req$body2.refuse, codeRequest = _req$body2.codeRequest;
            _context6.prev = 2;
            _context6.next = 5;
            return _ConfirmForm["default"].findAll({
              attributes: ["userId", "codeRequest", "dateAt", "observation", "refuse"],
              where: {
                id: id
              }
            });

          case 5:
            confirmations = _context6.sent;

            if (confirmations.length > 0) {
              confirmations.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(confirmation) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return confirmation.update({
                            userId: userId,
                            codeRequest: codeRequest,
                            dateAt: dateAt,
                            observation: observation,
                            refuse: refuse
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
              message: "Confirmation Updated Succesfully",
              confirmation: confirmations
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
  return _updateConfirmation.apply(this, arguments);
}

function deleteConfirmation(_x11, _x12) {
  return _deleteConfirmation.apply(this, arguments);
}

function _deleteConfirmation() {
  _deleteConfirmation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.prev = 1;
            _context7.next = 4;
            return _ConfirmForm["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context7.sent;
            res.json({
              message: "Confirmation Deleted Succesfully",
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
  return _deleteConfirmation.apply(this, arguments);
}