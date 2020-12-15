"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.register = register;
exports.signin = signin;
exports.updatePassword = updatePassword;
exports.resetEmail = resetEmail;
exports.resetPassword = resetPassword;

var _User = _interopRequireDefault(require("../models/User"));

var _bcryptNode = _interopRequireDefault(require("bcrypt-node"));

var _jwt = require("../services/jwt");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = require("../config/config");

var _Position = _interopRequireDefault(require("../models/Position"));

var _Office = _interopRequireDefault(require("../models/Office"));

var _Role = _interopRequireDefault(require("../models/Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var nodemailer = require("nodemailer");

function getUsers(_x, _x2) {
  return _getUsers.apply(this, arguments);
}

function _getUsers() {
  _getUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _User["default"].findAll({
              include: [{
                model: _Position["default"],
                as: 'position',
                include: [{
                  model: _Office["default"],
                  as: 'office'
                }]
              }, {
                model: _Role["default"],
                as: 'role',
                required: false,
                attributes: ['id', 'roleName', 'level']
              }]
            });

          case 3:
            users = _context.sent;
            res.json({
              data: users
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
  return _getUsers.apply(this, arguments);
}

function getUser(_x3, _x4) {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return _User["default"].findOne({
              where: {
                id: id
              },
              include: [{
                model: _Position["default"],
                as: 'position',
                required: false,
                include: [{
                  model: _Office["default"],
                  as: 'office'
                }]
              }, {
                model: _Role["default"],
                as: 'role',
                required: false,
                attributes: ['id', 'roleName', 'level']
              }]
            });

          case 4:
            user = _context2.sent;
            res.json({
              data: user,
              id: id
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
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
    }, _callee2, null, [[0, 8]]);
  }));
  return _getUser.apply(this, arguments);
}

function createUser(_x5, _x6) {
  return _createUser.apply(this, arguments);
}

function _createUser() {
  _createUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, name, lastname, email, password, access, roleId, positionId, resetLink, newUser;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, lastname = _req$body.lastname, email = _req$body.email, password = _req$body.password, access = _req$body.access, roleId = _req$body.roleId, positionId = _req$body.positionId, resetLink = _req$body.resetLink;
            _context3.prev = 1;
            _context3.next = 4;
            return _User["default"].create({
              name: name,
              lastname: lastname,
              email: email,
              password: password,
              access: access,
              roleId: roleId,
              positionId: positionId,
              resetLink: resetLink
            }, {
              fields: ["name", "lastname", "email", "password", "access", "roleId", "positionId", "resetLink"]
            });

          case 4:
            newUser = _context3.sent;

            if (!newUser) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: "User Created",
              data: newUser
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
  return _createUser.apply(this, arguments);
}

function updateUser(_x7, _x8) {
  return _updateUser.apply(this, arguments);
}

function _updateUser() {
  _updateUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, name, lastname, email, password, access, roleId, positionId, resetLink, users;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            console.log(req.params);
            _req$body2 = req.body, name = _req$body2.name, lastname = _req$body2.lastname, email = _req$body2.email, password = _req$body2.password, access = _req$body2.access, roleId = _req$body2.roleId, positionId = _req$body2.positionId, resetLink = _req$body2.resetLink;
            _context5.prev = 3;
            _context5.next = 6;
            return _User["default"].findAll({
              attributes: ["id", "name", "lastname", "email", "password", "access", "roleId", "positionId", "resetLink"],
              where: {
                id: id
              }
            });

          case 6:
            users = _context5.sent;

            if (users.length > 0) {
              users.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(user) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (user.password !== password) {
                            password = (_readOnlyError("password"), _bcryptNode["default"].hashSync(password));
                          }

                          _context4.next = 3;
                          return user.update({
                            name: name,
                            lastname: lastname,
                            email: email,
                            password: password,
                            access: access,
                            roleId: roleId,
                            positionId: positionId,
                            resetLink: resetLink
                          });

                        case 3:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x24) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context5.abrupt("return", res.json({
              message: "User Updated Succesfully",
              data: users
            }));

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](3);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context5.t0);

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 11]]);
  }));
  return _updateUser.apply(this, arguments);
}

function deleteUser(_x9, _x10) {
  return _deleteUser.apply(this, arguments);
}

function _deleteUser() {
  _deleteUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.prev = 1;
            _context6.next = 4;
            return _User["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context6.sent;
            res.json({
              message: "User Deleted Succesfully",
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
  return _deleteUser.apply(this, arguments);
}

function register(_x11, _x12) {
  return _register.apply(this, arguments);
}

function _register() {
  _register = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var _req$body3, name, lastname, email, password, access, roleId, positionId, hash, newUser, token;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body3 = req.body, name = _req$body3.name, lastname = _req$body3.lastname, email = _req$body3.email, password = _req$body3.password, access = _req$body3.access, roleId = _req$body3.roleId, positionId = _req$body3.positionId;
            hash = _bcryptNode["default"].hashSync(password);
            _context7.prev = 2;
            _context7.next = 5;
            return _User["default"].create({
              name: name,
              lastname: lastname,
              email: email,
              password: hash,
              access: access,
              roleId: roleId,
              positionId: positionId,
              resetLink: resetLink
            }, {
              fields: ["name", "lastname", "email", "password", "access", "roleId", "positionId", "resetLink"]
            });

          case 5:
            newUser = _context7.sent;

            if (newUser) {
              token = (0, _jwt.createToken)(newUser);
              res.status(200).json({
                "user": newUser,
                "Bearer": token
              });
            }

            _context7.next = 13;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](2);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.error(_context7.t0);

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 9]]);
  }));
  return _register.apply(this, arguments);
}

function signin(_x13, _x14) {
  return _signin.apply(this, arguments);
}

function _signin() {
  _signin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var _req$body4, email, password, user;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body4 = req.body, email = _req$body4.email, password = _req$body4.password;
            _context8.next = 3;
            return _User["default"].findOne({
              where: {
                email: email
              }
            });

          case 3:
            user = _context8.sent;

            if (!user) {
              res.status(401).json({
                message: 'El email ingresado no existe'
              });
            }

            _bcryptNode["default"].compare(password, user.password, function (err, check) {
              if (check) {
                //devolver datos del usuario logueado
                user.password = '';
                var token = (0, _jwt.createToken)(user);
                res.status(200).json({
                  "user": user,
                  "Bearer": token
                });
              } else {
                res.status(404).send({
                  message: 'El usuario no ha podido loguearse'
                });
              }

              if (err) {
                res.status(500).send('error', err);
              }
            });

          case 6:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _signin.apply(this, arguments);
}

function updatePassword(_x15, _x16) {
  return _updatePassword.apply(this, arguments);
}

function _updatePassword() {
  _updatePassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var id, password, hash, users;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id = req.params.id;
            password = req.body.password;
            hash = _bcryptNode["default"].hashSync(password);
            _context10.prev = 3;
            _context10.next = 6;
            return _User["default"].findAll({
              attributes: ["id", "name", "lastname", "email", "password", "access", "roleId", "positionId", "resetLink"],
              where: {
                id: id
              }
            });

          case 6:
            users = _context10.sent;

            if (users.length > 0) {
              users.forEach( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(user) {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return user.update({
                            password: hash
                          });

                        case 2:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }));

                return function (_x25) {
                  return _ref2.apply(this, arguments);
                };
              }());
            }

            return _context10.abrupt("return", res.json({
              message: "User Updated Succesfully",
              data: users
            }));

          case 11:
            _context10.prev = 11;
            _context10.t0 = _context10["catch"](3);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });
            console.log(_context10.t0);

          case 15:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[3, 11]]);
  }));
  return _updatePassword.apply(this, arguments);
}

function resetEmail(_x17, _x18) {
  return _resetEmail.apply(this, arguments);
}

function _resetEmail() {
  _resetEmail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var email, user, token;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            email = req.params.email;
            console.log(email);
            _context11.prev = 2;
            _context11.next = 5;
            return _User["default"].findOne({
              where: {
                email: email
              }
            });

          case 5:
            user = _context11.sent;
            console.log(user);
            token = (0, _jwt.resetToken)(user);
            user.update({
              resetLink: token
            });
            sendEmail(email, token, res);
            return _context11.abrupt("return", res.json({
              message: "User Updated Succesfully",
              data: user
            }));

          case 13:
            _context11.prev = 13;
            _context11.t0 = _context11["catch"](2);
            res.status(500).json({
              message: "Something goes wrong",
              error: _context11.t0,
              data: {}
            });
            console.error(_context11.t0);

          case 17:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[2, 13]]);
  }));
  return _resetEmail.apply(this, arguments);
}

function sendEmail(_x19, _x20, _x21) {
  return _sendEmail.apply(this, arguments);
}

function _sendEmail() {
  _sendEmail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(email, token, res) {
    var transporter, mailOptions;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            //let testAccount = await nodemailer.createTestAccount();
            transporter = nodemailer.createTransport({
              /*  host: "smtp.ethereal.email",
               port: 587,
               secure: false, // true for 465, false for other ports
               auth: {
                 user: "velva.stokes62@ethereal.email", // generated ethereal user
                 pass: "Y5bApMGaD1nSDMzzHR", // generated ethereal password
               }, */

              /* tls:{
                rejectUnauthorized: false
              } */
              service: "Yahoo",
              secure: true,
              auth: {
                user: "carlos05_ale@yahoo.es",
                pass: "ykzsibrryadkyekd"
              }
            }); // send mail with defined transport object

            mailOptions = {
              from: "carlos05_ale@yahoo.es",
              // sender address
              to: email,
              // list of receivers
              subject: "Hello ✔",
              // Subject line
              text: "Este es un mensaje de pprueba para mandar emails?",
              // plain text body
              html: "<b>esta funcionando esta prueba?</b><h1>".concat(token, "</h1>") // html body

            };
            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                return res.status(500).json({
                  error: error
                });
              } else {
                console.log('mensaje enviado');
                return res.status(200).json({
                  message: "Mensaje enviado"
                });
              }
            });

          case 3:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _sendEmail.apply(this, arguments);
}

function resetPassword(_x22, _x23) {
  return _resetPassword.apply(this, arguments);
}

function _resetPassword() {
  _resetPassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(req, res) {
    var token, password;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            token = req.params.token;
            password = req.body.password;

            if (token) {
              _jsonwebtoken["default"].verify(token, _config.cfg.key, /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(error, decodedData) {
                  var user, hash;
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          if (!error) {
                            _context13.next = 2;
                            break;
                          }

                          return _context13.abrupt("return", res.status(401).json({
                            message: 'Solicitud desautorizada'
                          }));

                        case 2:
                          _context13.prev = 2;
                          _context13.next = 5;
                          return _User["default"].findOne({
                            where: {
                              resetLink: token
                            }
                          });

                        case 5:
                          user = _context13.sent;
                          console.log(user);
                          hash = _bcryptNode["default"].hashSync(password);
                          _context13.next = 10;
                          return user.update({
                            password: hash
                          });

                        case 10:
                          return _context13.abrupt("return", res.json({
                            message: "User Updated Succesfully",
                            data: user
                          }));

                        case 13:
                          _context13.prev = 13;
                          _context13.t0 = _context13["catch"](2);
                          res.status(500).json({
                            message: "Something goes wrong",
                            error: _context13.t0,
                            data: {}
                          });

                        case 16:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _callee13, null, [[2, 13]]);
                }));

                return function (_x26, _x27) {
                  return _ref3.apply(this, arguments);
                };
              }());
            }

          case 3:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _resetPassword.apply(this, arguments);
}