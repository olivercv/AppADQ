"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPositions = getPositions;
exports.getPosition = getPosition;
exports.createPosition = createPosition;
exports.updatePosition = updatePosition;
exports.deletePosition = deletePosition;

var _Position = _interopRequireDefault(require("../models/Position"));

var _Office = _interopRequireDefault(require("../models/Office"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getPositions(_x, _x2) {
  return _getPositions.apply(this, arguments);
}

function _getPositions() {
  _getPositions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var positions;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Position["default"].findAll({
              include: [{
                model: _Office["default"],
                as: 'office'
              }]
            });

          case 3:
            positions = _context.sent;
            res.json({
              positions: positions
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
  return _getPositions.apply(this, arguments);
}

function getPosition(_x3, _x4) {
  return _getPosition.apply(this, arguments);
}

function _getPosition() {
  _getPosition = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, position;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Position["default"].findOne({
              where: {
                id: id
              },
              include: [{
                model: _Office["default"],
                as: 'office',
                required: false
              }]
            });

          case 4:
            position = _context2.sent;
            res.json({
              position: position
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
  return _getPosition.apply(this, arguments);
}

function createPosition(_x5, _x6) {
  return _createPosition.apply(this, arguments);
}

function _createPosition() {
  _createPosition = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, officeId, name, active, newPosition;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, officeId = _req$body.officeId, name = _req$body.name, active = _req$body.active;
            _context3.prev = 1;
            _context3.next = 4;
            return _Position["default"].create({
              officeId: officeId,
              name: name,
              active: active
            }, {
              fields: ["officeId", "name", "active"]
            });

          case 4:
            newPosition = _context3.sent;

            if (!newPosition) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: "Position Created",
              position: newPosition
            }));

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _createPosition.apply(this, arguments);
}

function updatePosition(_x7, _x8) {
  return _updatePosition.apply(this, arguments);
}

function _updatePosition() {
  _updatePosition = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, officeId, name, active, positions;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, officeId = _req$body2.officeId, name = _req$body2.name, active = _req$body2.active;
            _context5.prev = 2;
            _context5.next = 5;
            return _Position["default"].findAll({
              attributes: ['id', 'officeId', 'name', 'active'],
              where: {
                id: id
              }
            });

          case 5:
            positions = _context5.sent;

            if (positions.length > 0) {
              positions.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(position) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return position.update({
                            officeId: officeId,
                            name: name,
                            active: active
                          });

                        case 2:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context5.abrupt("return", res.json({
              message: "Position Updated Succesfully",
              position: positions
            }));

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](2);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context5.t0);

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 10]]);
  }));
  return _updatePosition.apply(this, arguments);
}

function deletePosition(_x9, _x10) {
  return _deletePosition.apply(this, arguments);
}

function _deletePosition() {
  _deletePosition = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.prev = 1;
            _context6.next = 4;
            return _Position["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context6.sent;
            res.json({
              message: "Position Deleted Succesfully",
              count: deleteRowCount
            });
            _context6.next = 12;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            res.status(500).json({
              message: "Something goes wrong"
            });
            console.log(_context6.t0);

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return _deletePosition.apply(this, arguments);
}