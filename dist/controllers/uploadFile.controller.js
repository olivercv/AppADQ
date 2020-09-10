"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadFile = uploadFile;
exports.getFile = void 0;

var _Document = _interopRequireDefault(require("../models/Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var path = require("path");

var fs = require("fs");

var _require = require('express'),
    response = _require.response;

function uploadFile(req, res, next) {
  var id = req.params.id; // tipos de colecciones

  if (!req.files) {
    return res.status(400).json({
      ok: false,
      message: "No selecciono ningun archivo",
      errors: "Debe de seleccionar un archivo"
    });
  } // Obtener nombre del archivo


  var fil = req.files.sfile;
  var shortName = fil.name.split(".");
  var ext = shortName[shortName = 1]; // solo se aceptaran estas extensiones

  var validExt = ["pdf", "doc", "docx", "xls", "xlsx"];

  if (validExt.indexOf(ext) < 0) {
    return res.status(400).json({
      ok: false,
      mensaje: "Extensión no válida",
      errors: "Las extensiones validas son: " + validExt.join(", ")
    });
  } // Nombre de archivo personalizado


  var nameFile = "".concat(id, "-").concat(new Date().getMilliseconds(), ".").concat(ext); //Mover el archivo temporal al un path

  var path = "./uploads/".concat(nameFile);
  fil.mv(path, function (err) {
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: "Error al mover archivo 1",
        errors: err
      });
    }

    uploadDocument(id, nameFile, ext, res);
  });
}

var deleteOldPath = function deleteOldPath(path) {
  if (fs.existsSync(path)) {
    // borrar la imagen anterior
    fs.unlinkSync(path);
  }
};

function uploadDocument(_x, _x2, _x3, _x4) {
  return _uploadDocument.apply(this, arguments);
}

function _uploadDocument() {
  _uploadDocument = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, nameFile, ext, res) {
    var oldPath, document;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            oldPath = '';
            _context.prev = 1;
            _context.next = 4;
            return _Document["default"].findByPk(id);

          case 4:
            document = _context.sent;

            if (document) {
              oldPath = "./uploads/".concat(document.src);
              deleteOldPath(oldPath);
              document.update({
                type: ext,
                src: nameFile
              });
              res.json({
                message: "Document OK",
                document: document
              });
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(500).json({
              message: "Something goes wrong"
            });
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _uploadDocument.apply(this, arguments);
}

var getFile = function getFile(req) {
  var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : response;
  var sfile = req.params.src;
  var pathImg = path.join(__dirname, "../../uploads/".concat(sfile));
  var pathFile = path.resolve(__dirname, "../../uploads/".concat(sfile));

  if (fs.existsSync(pathImg)) {
    res.sendFile(pathImg);
  }

  if (fs.existsSync(pathFile)) {
    res.sendFile(pathFile);
  } else {
    res.status(500).json({
      message: "Something goes wrong",
      path: pathImg,
      pathF: pathFile
    });
  }
};

exports.getFile = getFile;