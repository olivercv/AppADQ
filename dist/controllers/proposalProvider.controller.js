"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProposalProviders = getProposalProviders;
exports.getProposalProvider = getProposalProvider;
exports.getPPForm = getPPForm;
exports.createProposalProvider = createProposalProvider;
exports.updateProposalProvider = updateProposalProvider;
exports.deleteProposalProvider = deleteProposalProvider;

var _ProposalProvider = _interopRequireDefault(require("../models/ProposalProvider"));

var _Document = _interopRequireDefault(require("../models/Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getProposalProviders(_x, _x2) {
  return _getProposalProviders.apply(this, arguments);
}

function _getProposalProviders() {
  _getProposalProviders = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var proposalProviders;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _ProposalProvider["default"].findAll();

          case 3:
            proposalProviders = _context.sent;
            res.json({
              proposalProviders: proposalProviders
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
  return _getProposalProviders.apply(this, arguments);
}

function getProposalProvider(_x3, _x4) {
  return _getProposalProvider.apply(this, arguments);
} //get proposal formId


function _getProposalProvider() {
  _getProposalProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, proposalProvider;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _ProposalProvider["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            proposalProvider = _context2.sent;
            res.json({
              proposalProvider: proposalProvider
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
  return _getProposalProvider.apply(this, arguments);
}

function getPPForm(_x5, _x6) {
  return _getPPForm.apply(this, arguments);
}

function _getPPForm() {
  _getPPForm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, proposalProviders;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _ProposalProvider["default"].findAll({
              where: {
                formId: id
              }
            });

          case 4:
            proposalProviders = _context3.sent;
            res.json({
              proposalProviders: proposalProviders
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
  return _getPPForm.apply(this, arguments);
}

function createProposalProvider(_x7, _x8) {
  return _createProposalProvider.apply(this, arguments);
}

function _createProposalProvider() {
  _createProposalProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, name, economicProposal, date, formId, warranty, newProposalProvider;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, economicProposal = _req$body.economicProposal, date = _req$body.date, formId = _req$body.formId, warranty = _req$body.warranty;
            _context4.prev = 1;
            _context4.next = 4;
            return _ProposalProvider["default"].create({
              name: name,
              economicProposal: economicProposal,
              date: date,
              formId: formId,
              warranty: warranty
            }, {
              fields: ["name", "economicProposal", "date", "formId", "warranty"]
            });

          case 4:
            newProposalProvider = _context4.sent;

            if (!newProposalProvider) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: "ProposalProvider Created",
              proposalProvider: newProposalProvider
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
  return _createProposalProvider.apply(this, arguments);
}

function updateProposalProvider(_x9, _x10) {
  return _updateProposalProvider.apply(this, arguments);
}

function _updateProposalProvider() {
  _updateProposalProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, name, economicProposal, date, formId, warranty, proposalProviders;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, economicProposal = _req$body2.economicProposal, date = _req$body2.date, formId = _req$body2.formId, warranty = _req$body2.warranty;
            _context6.prev = 2;
            _context6.next = 5;
            return _ProposalProvider["default"].findAll({
              attributes: ["id", "name", "economicProposal", "date", "formId", "warranty"],
              where: {
                id: id
              }
            });

          case 5:
            proposalProviders = _context6.sent;

            if (proposalProviders.length > 0) {
              proposalProviders.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(proposalProvider) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return proposalProvider.update({
                            name: name,
                            economicProposal: economicProposal,
                            date: date,
                            formId: formId,
                            warranty: warranty
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
              message: "ProposalProvider Updated Succesfully",
              proposalProvider: proposalProviders
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
  return _updateProposalProvider.apply(this, arguments);
}

function deleteProposalProvider(_x11, _x12) {
  return _deleteProposalProvider.apply(this, arguments);
}

function _deleteProposalProvider() {
  _deleteProposalProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.prev = 1;
            _context7.next = 4;
            return _ProposalProvider["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context7.sent;
            res.json({
              message: "ProposalProvider Deleted Succesfully",
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
  return _deleteProposalProvider.apply(this, arguments);
}