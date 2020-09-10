"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCompanies = getCompanies;
exports.getCompany = getCompany;
exports.createCompany = createCompany;
exports.updateCompany = updateCompany;
exports.deleteCompany = deleteCompany;

var _Company = _interopRequireDefault(require("../models/Company"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getCompanies(_x, _x2) {
  return _getCompanies.apply(this, arguments);
}

function _getCompanies() {
  _getCompanies = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var companies;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Company["default"].findAll();

          case 3:
            companies = _context.sent;
            res.json({
              companies: companies
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
  return _getCompanies.apply(this, arguments);
}

function getCompany(_x3, _x4) {
  return _getCompany.apply(this, arguments);
}

function _getCompany() {
  _getCompany = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, company;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Company["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            company = _context2.sent;
            res.json({
              company: company
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
  return _getCompany.apply(this, arguments);
}

function createCompany(_x5, _x6) {
  return _createCompany.apply(this, arguments);
}

function _createCompany() {
  _createCompany = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, name, direction, nit, email, phone, newCompany;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, direction = _req$body.direction, nit = _req$body.nit, email = _req$body.email, phone = _req$body.phone;
            _context3.prev = 1;
            _context3.next = 4;
            return _Company["default"].create({
              name: name,
              direction: direction,
              nit: nit,
              email: email,
              phone: phone
            }, {
              fields: ["name", "direction", "nit", "email", "phone"]
            });

          case 4:
            newCompany = _context3.sent;

            if (!newCompany) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: "Company Created",
              company: newCompany
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
  return _createCompany.apply(this, arguments);
}

function updateCompany(_x7, _x8) {
  return _updateCompany.apply(this, arguments);
}

function _updateCompany() {
  _updateCompany = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, name, direction, nit, email, phone, companies;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, direction = _req$body2.direction, nit = _req$body2.nit, email = _req$body2.email, phone = _req$body2.phone;
            _context5.prev = 2;
            _context5.next = 5;
            return _Company["default"].findAll({
              attributes: ["id", "name", "direction", "nit", "email", "phone"],
              where: {
                id: id
              }
            });

          case 5:
            companies = _context5.sent;

            if (companies.length > 0) {
              companies.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(company) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return company.update({
                            name: name,
                            direction: direction,
                            nit: nit,
                            email: email,
                            phone: phone
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
              message: "Company Updated Succesfully",
              company: companies
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
  return _updateCompany.apply(this, arguments);
}

function deleteCompany(_x9, _x10) {
  return _deleteCompany.apply(this, arguments);
}

function _deleteCompany() {
  _deleteCompany = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.prev = 1;
            _context6.next = 4;
            return _Company["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context6.sent;
            res.json({
              message: "Company Deleted Succesfully",
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
  return _deleteCompany.apply(this, arguments);
}