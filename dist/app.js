"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

var _path = _interopRequireDefault(require("path"));

var _companies = _interopRequireDefault(require("./routes/companies"));

var _offices = _interopRequireDefault(require("./routes/offices"));

var _positions = _interopRequireDefault(require("./routes/positions"));

var _user = _interopRequireDefault(require("./routes/user"));

var _confirmForm = _interopRequireDefault(require("./routes/confirmForm"));

var _document = _interopRequireDefault(require("./routes/document"));

var _admCondition = _interopRequireDefault(require("./routes/admCondition"));

var _product = _interopRequireDefault(require("./routes/product"));

var _acquisitionRequest = _interopRequireDefault(require("./routes/acquisitionRequest"));

var _uploadFile = _interopRequireDefault(require("./routes/uploadFile"));

var _technicalReport = _interopRequireDefault(require("./routes/technicalReport"));

var _budgetCertification = _interopRequireDefault(require("./routes/budgetCertification"));

var _status = _interopRequireDefault(require("./routes/status"));

var _procedure = _interopRequireDefault(require("./routes/procedure"));

var _proposalProvider = _interopRequireDefault(require("./routes/proposalProvider"));

var _proposalEvaluation = _interopRequireDefault(require("./routes/proposalEvaluation"));

var _proposalComparison = _interopRequireDefault(require("./routes/proposalComparison"));

var _processStart = _interopRequireDefault(require("./routes/processStart"));

var _purchaseOrder = _interopRequireDefault(require("./routes/purchaseOrder"));

var _technicalEvaluation = _interopRequireDefault(require("./routes/technicalEvaluation"));

var _legalContract = _interopRequireDefault(require("./routes/legalContract"));

var _specification = _interopRequireDefault(require("./routes/specification"));

require("regenerator-runtime/runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import fileUpload from 'express-fileupload';
//importing routes 
// import "core-js/stable";
//initialization
var app = (0, _express["default"])(); //middlewares 

app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)()); //app.use(fileUpload());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Heade-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
}); //routes

app.use('/api/companies', _companies["default"]);
app.use('/api/offices', _offices["default"]);
app.use('/api/positions', _positions["default"]);
app.use('/api/users', _user["default"]);
app.use('/api/confirmations', _confirmForm["default"]);
app.use('/api/documents', _document["default"]);
app.use('/api/admConditions', _admCondition["default"]);
app.use('/api/products', _product["default"]);
app.use('/api/acquisitionRequests', _acquisitionRequest["default"]);
app.use('/api/files', _uploadFile["default"]);
app.use('/api/technicalReports', _technicalReport["default"]);
app.use('/api/budgetCertifications', _budgetCertification["default"]);
app.use('/api/status', _status["default"]);
app.use('/api/procedures', _procedure["default"]);
app.use('/api/proposalProviders', _proposalProvider["default"]);
app.use('/api/proposalEvaluations', _proposalEvaluation["default"]);
app.use('/api/proposalComparisons', _proposalComparison["default"]);
app.use('/api/processStarts', _processStart["default"]);
app.use('/api/purchaseOrders', _purchaseOrder["default"]);
app.use('/api/technicalEvaluations', _technicalEvaluation["default"]);
app.use('/api/legalContracts', _legalContract["default"]);
app.use('/api/specifications', _specification["default"]);
app.use('/uploads', _express["default"]["static"](_path["default"].resolve('uploads'))); // Configuracion para subir el backend y el front en un solo puerto

app.use('/', _express["default"]["static"]('client', {
  redirect: false
}));
app.get('*', function (req, res, next) {
  res.sendFile(_path["default"].resolve('client/index.html'));
});
var _default = app;
exports["default"] = _default;