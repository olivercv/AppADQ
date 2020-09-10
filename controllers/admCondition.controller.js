"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAdmConditions = getAdmConditions;
exports.getAdmCondition = getAdmCondition;
exports.getAdmConditionRequest = getAdmConditionRequest;
exports.createAdmCondition = createAdmCondition;
exports.updateAdmCondition = updateAdmCondition;
exports.deleteAdmCondition = deleteAdmCondition;

var _AdmCondition = _interopRequireDefault(require("../models/AdmCondition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAdmConditions(_x, _x2) {
  return _getAdmConditions.apply(this, arguments);
}

function _getAdmConditions() {
  _getAdmConditions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var admConditions;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _AdmCondition["default"].findAll();

          case 3:
            admConditions = _context.sent;
            res.json({
              admConditions: admConditions
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
  return _getAdmConditions.apply(this, arguments);
}

function getAdmCondition(_x3, _x4) {
  return _getAdmCondition.apply(this, arguments);
}

function _getAdmCondition() {
  _getAdmCondition = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, admCondition;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _AdmCondition["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            admCondition = _context2.sent;
            res.json({
              admCondition: admCondition
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
  return _getAdmCondition.apply(this, arguments);
}

function getAdmConditionRequest(_x5, _x6) {
  return _getAdmConditionRequest.apply(this, arguments);
}

function _getAdmConditionRequest() {
  _getAdmConditionRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var requestId, admConditions;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            requestId = req.params.requestId;
            _context3.prev = 1;
            _context3.next = 4;
            return _AdmCondition["default"].findAll({
              where: {
                requestId: requestId
              }
            });

          case 4:
            admConditions = _context3.sent;
            res.json({
              admConditions: admConditions
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
  return _getAdmConditionRequest.apply(this, arguments);
}

function createAdmCondition(_x7, _x8) {
  return _createAdmCondition.apply(this, arguments);
}

function _createAdmCondition() {
  _createAdmCondition = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, priority, type, warranty, deliveryTime, placeDelivery, posibleProviders, requestId, newAdmCondition;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, priority = _req$body.priority, type = _req$body.type, warranty = _req$body.warranty, deliveryTime = _req$body.deliveryTime, placeDelivery = _req$body.placeDelivery, posibleProviders = _req$body.posibleProviders, requestId = _req$body.requestId;
            _context4.prev = 1;
            _context4.next = 4;
            return _AdmCondition["default"].create({
              priority: priority,
              type: type,
              warranty: warranty,
              deliveryTime: deliveryTime,
              placeDelivery: placeDelivery,
              posibleProviders: posibleProviders,
              requestId: requestId
            }, {
              fields: ["priority", "type", "warranty", "deliveryTime", "placeDelivery", "posibleProviders", "requestId"]
            });

          case 4:
            newAdmCondition = _context4.sent;

            if (!newAdmCondition) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: "AdmCondition Created",
              admCondition: newAdmCondition
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
  return _createAdmCondition.apply(this, arguments);
}

function updateAdmCondition(_x9, _x10) {
  return _updateAdmCondition.apply(this, arguments);
}

function _updateAdmCondition() {
  _updateAdmCondition = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, priority, type, warranty, deliveryTime, placeDelivery, posibleProviders, requestId, admConditions;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, priority = _req$body2.priority, type = _req$body2.type, warranty = _req$body2.warranty, deliveryTime = _req$body2.deliveryTime, placeDelivery = _req$body2.placeDelivery, posibleProviders = _req$body2.posibleProviders, requestId = _req$body2.requestId;
            _context6.prev = 2;
            _context6.next = 5;
            return _AdmCondition["default"].findAll({
              attributes: ['id', 'priority', 'type', 'warranty', 'deliveryTime', 'placeDelivery', 'posibleProviders', 'requestId'],
              where: {
                id: id
              }
            });

          case 5:
            admConditions = _context6.sent;

            if (admConditions.length > 0) {
              admConditions.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(admCondition) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return admCondition.update({
                            priority: priority,
                            type: type,
                            warranty: warranty,
                            deliveryTime: deliveryTime,
                            placeDelivery: placeDelivery,
                            posibleProviders: posibleProviders,
                            requestId: requestId
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
              message: "AdmCondition Updated Succesfully",
              admCondition: admConditions
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
  return _updateAdmCondition.apply(this, arguments);
}

function deleteAdmCondition(_x11, _x12) {
  return _deleteAdmCondition.apply(this, arguments);
}

function _deleteAdmCondition() {
  _deleteAdmCondition = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.prev = 1;
            _context7.next = 4;
            return _AdmCondition["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context7.sent;
            res.json({
              message: "AdmCondition Deleted Succesfully",
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
  return _deleteAdmCondition.apply(this, arguments);
}