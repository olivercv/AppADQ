"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProposalEvaluations = getProposalEvaluations;
exports.getProposalEvaluation = getProposalEvaluation;
exports.getPEP = getPEP;
exports.createProposalEvaluation = createProposalEvaluation;
exports.updateProposalEvaluation = updateProposalEvaluation;
exports.deleteProposalEvaluation = deleteProposalEvaluation;

var _ProposalEvaluation = _interopRequireDefault(require("../models/ProposalEvaluation"));

var _ProposalProvider = _interopRequireDefault(require("../models/ProposalProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getProposalEvaluations(_x, _x2) {
  return _getProposalEvaluations.apply(this, arguments);
}

function _getProposalEvaluations() {
  _getProposalEvaluations = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var proposalEvaluations;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _ProposalEvaluation["default"].findAll();

          case 3:
            proposalEvaluations = _context.sent;
            res.json({
              proposalEvaluations: proposalEvaluations
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
  return _getProposalEvaluations.apply(this, arguments);
}

function getProposalEvaluation(_x3, _x4) {
  return _getProposalEvaluation.apply(this, arguments);
} //get proposal evaluation ==> proposal providers


function _getProposalEvaluation() {
  _getProposalEvaluation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, proposalEvaluation;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _ProposalEvaluation["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            proposalEvaluation = _context2.sent;
            res.json({
              proposalEvaluation: proposalEvaluation
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
  return _getProposalEvaluation.apply(this, arguments);
}

function getPEP(_x5, _x6) {
  return _getPEP.apply(this, arguments);
}

function _getPEP() {
  _getPEP = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, proposalEvaluation;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _ProposalEvaluation["default"].findOne({
              where: {
                id: id
              },
              include: [{
                model: _ProposalProvider["default"],
                as: 'proposalProviders',
                required: false,
                // Pass in the Document attributes that you want to retrieve
                attributes: ['id', 'name', 'nit', 'date', 'formId']
              }]
            });

          case 4:
            proposalEvaluation = _context3.sent;
            res.json({
              proposalEvaluation: proposalEvaluation
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
  return _getPEP.apply(this, arguments);
}

function createProposalEvaluation(_x7, _x8) {
  return _createProposalEvaluation.apply(this, arguments);
}

function _createProposalEvaluation() {
  _createProposalEvaluation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var code, newProposalEvaluation;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            code = req.body.code;
            _context4.prev = 1;
            _context4.next = 4;
            return _ProposalEvaluation["default"].create({
              code: code
            }, {
              fields: ["code"]
            });

          case 4:
            newProposalEvaluation = _context4.sent;

            if (!newProposalEvaluation) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: "ProposalEvaluation Created",
              proposalEvaluation: newProposalEvaluation
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
  return _createProposalEvaluation.apply(this, arguments);
}

function updateProposalEvaluation(_x9, _x10) {
  return _updateProposalEvaluation.apply(this, arguments);
}

function _updateProposalEvaluation() {
  _updateProposalEvaluation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, code, proposalEvaluations;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            code = req.body.code;
            _context6.prev = 2;
            _context6.next = 5;
            return _ProposalEvaluation["default"].findAll({
              attributes: ['id', 'code'],
              where: {
                id: id
              }
            });

          case 5:
            proposalEvaluations = _context6.sent;

            if (proposalEvaluations.length > 0) {
              proposalEvaluations.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(proposalEvaluation) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return proposalEvaluation.update({
                            code: code
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
              message: "ProposalEvaluation Updated Succesfully",
              proposalEvaluation: proposalEvaluations
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
  return _updateProposalEvaluation.apply(this, arguments);
}

function deleteProposalEvaluation(_x11, _x12) {
  return _deleteProposalEvaluation.apply(this, arguments);
}

function _deleteProposalEvaluation() {
  _deleteProposalEvaluation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.prev = 1;
            _context7.next = 4;
            return _ProposalEvaluation["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context7.sent;
            res.json({
              message: "ProposalEvaluation Deleted Succesfully",
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
  return _deleteProposalEvaluation.apply(this, arguments);
}