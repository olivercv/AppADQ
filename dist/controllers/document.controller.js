"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDocuments = getDocuments;
exports.getDocument = getDocument;
exports.getDocumentForm = getDocumentForm;
exports.createDocument = createDocument;
exports.updateDocument = updateDocument;
exports.deleteDocument = deleteDocument;

var _Document = _interopRequireDefault(require("../models/Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getDocuments(_x, _x2) {
  return _getDocuments.apply(this, arguments);
}

function _getDocuments() {
  _getDocuments = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var documents;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Document["default"].findAll({
              attributes: ["id", "name", "type", "formId", "src", "status", "createDate", "fileName"]
            });

          case 3:
            documents = _context.sent;
            res.json({
              documents: documents
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
  return _getDocuments.apply(this, arguments);
}

function getDocument(_x3, _x4) {
  return _getDocument.apply(this, arguments);
}

function _getDocument() {
  _getDocument = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, document;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Document["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            document = _context2.sent;
            res.json({
              document: document
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
  return _getDocument.apply(this, arguments);
}

function getDocumentForm(_x5, _x6) {
  return _getDocumentForm.apply(this, arguments);
}

function _getDocumentForm() {
  _getDocumentForm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, documents;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Document["default"].findAll({
              where: {
                formId: id
              }
            });

          case 4:
            documents = _context3.sent;
            res.json({
              documents: documents
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
  return _getDocumentForm.apply(this, arguments);
}

function createDocument(_x7, _x8) {
  return _createDocument.apply(this, arguments);
}

function _createDocument() {
  _createDocument = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, name, type, formId, src, status, createDate, fileName, newDocument;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, type = _req$body.type, formId = _req$body.formId, src = _req$body.src, status = _req$body.status, createDate = _req$body.createDate, fileName = _req$body.fileName;
            _context4.prev = 1;
            _context4.next = 4;
            return _Document["default"].create({
              name: name,
              type: type,
              formId: formId,
              src: src,
              status: status,
              createDate: createDate,
              fileName: fileName
            }, {
              fields: ["name", "type", "formId", "src", "status", "createDate", "fileName"]
            });

          case 4:
            newDocument = _context4.sent;

            if (!newDocument) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: "Document Created",
              document: newDocument
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
  return _createDocument.apply(this, arguments);
}

function updateDocument(_x9, _x10) {
  return _updateDocument.apply(this, arguments);
}

function _updateDocument() {
  _updateDocument = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, name, type, formId, src, status, createDate, fileName, documents;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, type = _req$body2.type, formId = _req$body2.formId, src = _req$body2.src, status = _req$body2.status, createDate = _req$body2.createDate, fileName = _req$body2.fileName;
            _context6.prev = 2;
            _context6.next = 5;
            return _Document["default"].findAll({
              attributes: ["id", "name", "type", "formId", "src", "status", "createDate", "fileName"],
              where: {
                id: id
              }
            });

          case 5:
            documents = _context6.sent;

            if (documents.length > 0) {
              documents.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(document) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return document.update({
                            name: name,
                            type: type,
                            formId: formId,
                            src: src,
                            status: status,
                            createDate: createDate,
                            fileName: fileName
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
              message: "Document Updated Succesfully",
              document: documents
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
  return _updateDocument.apply(this, arguments);
}

function deleteDocument(_x11, _x12) {
  return _deleteDocument.apply(this, arguments);
}
/* export async function uploadFile(req, res) {
  try {
    let newDocument = await Document.create(
      {
        type: req.file.mimetype,
        name: req.file.originalname,
        data: req.file.buffer,
      },
      {
        fields: ["name", "type", "data"],
      }
    );
    if (newDocument) {
      return res.json({
        message: "Document Created",
        data: newDocument.name,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function downloadDocument(req, res) {
  try {
    const document = await Document.findByPk(req.params.id);
    if (document) {
      var fileContents = Buffer.from(document.data, "base64");
      var readStream = new stream.PassThrough();
      readStream.end(fileContents);

      res.set("Content-disposition", "attachment; filename=" + document.name);
      res.set("Content-Type", document.type);

      readStream.pipe(res);
    }
  } catch (error) {
    res.status(500).json({ 
      message: "Something goes wrong",  
    });
    console.log(error);
    
  }
} 
 */


function _deleteDocument() {
  _deleteDocument = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.prev = 1;
            _context7.next = 4;
            return _Document["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context7.sent;
            res.json({
              message: "Document Deleted Succesfully",
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
  return _deleteDocument.apply(this, arguments);
}