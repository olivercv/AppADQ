"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoles = getRoles;
exports.getRole = getRole;
exports.createRole = createRole;
exports.updateRole = updateRole;
exports.deleteRole = deleteRole;

var _Role = _interopRequireDefault(require("../models/Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getRoles(_x, _x2) {
  return _getRoles.apply(this, arguments);
}

function _getRoles() {
  _getRoles = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var roles;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Role["default"].findAll();

          case 3:
            roles = _context.sent;
            res.json({
              roles: roles
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
  return _getRoles.apply(this, arguments);
}

function getRole(_x3, _x4) {
  return _getRole.apply(this, arguments);
}

function _getRole() {
  _getRole = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, role;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Role["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            role = _context2.sent;
            res.json({
              role: role
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
  return _getRole.apply(this, arguments);
}

function createRole(_x5, _x6) {
  return _createRole.apply(this, arguments);
}

function _createRole() {
  _createRole = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, roleName, level, newRole;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, roleName = _req$body.roleName, level = _req$body.level;
            _context3.prev = 1;
            _context3.next = 4;
            return _Role["default"].create({
              roleName: roleName,
              level: level
            }, {
              fields: ["roleName", "level"]
            });

          case 4:
            newRole = _context3.sent;

            if (!newRole) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: "Role Created",
              role: newRole
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
  return _createRole.apply(this, arguments);
}

function updateRole(_x7, _x8) {
  return _updateRole.apply(this, arguments);
}

function _updateRole() {
  _updateRole = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, roleName, level, roles;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, roleName = _req$body2.roleName, level = _req$body2.level;
            _context5.prev = 2;
            _context5.next = 5;
            return _Role["default"].findAll({
              attributes: ['id', 'roleName', 'level'],
              where: {
                id: id
              }
            });

          case 5:
            roles = _context5.sent;

            if (roles.length > 0) {
              roles.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(role) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return role.update({
                            roleName: roleName,
                            level: level
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
              message: "Role Updated Succesfully",
              role: roles
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
  return _updateRole.apply(this, arguments);
}

function deleteRole(_x9, _x10) {
  return _deleteRole.apply(this, arguments);
}

function _deleteRole() {
  _deleteRole = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.prev = 1;
            _context6.next = 4;
            return _Role["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context6.sent;
            res.json({
              message: "Role Deleted Succesfully",
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
  return _deleteRole.apply(this, arguments);
}