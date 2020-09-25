import express, {json} from 'express';
import morgan from 'morgan';
//import fileUpload from 'express-fileupload';
import fileUpload from 'express-fileupload';
import path from 'path';
//importing routes 
import companyRoutes from './routes/companies';
import officeRoutes from './routes/offices';
import positionRoutes from './routes/positions';
import userRoutes from './routes/user';
import confirmRoutes from './routes/confirmForm';
import documentRoutes from './routes/document';
import admConditionRoutes from './routes/admCondition';
import productRoutes from './routes/product';
import acquisitionRequestRoutes from './routes/acquisitionRequest';
import uploadFileRoutes from './routes/uploadFile';
import technicalReportRoutes from './routes/technicalReport';
import budgetCertificationRoutes from './routes/budgetCertification';
import statusRoutes from './routes/status';
import procedureRoutes from './routes/procedure';
import proposalProviderRoutes from './routes/proposalProvider';
import proposalEvaluationRoutes from './routes/proposalEvaluation';
import proposalComparisonRoutes from './routes/proposalComparison';
import processStartRoutes from './routes/processStart';
import purchaseOrderRoutes from './routes/purchaseOrder';
import technicalEvaluationRoutes from './routes/technicalEvaluation';
import legalContractRoutes from './routes/legalContract';
import specificationRoutes from './routes/specification';
// import "core-js/stable";
import "regenerator-runtime/runtime";

//initialization
const app = express();

//middlewares 
app.use(morgan('dev'));
app.use(json());

//app.use(fileUpload());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Heade-Request-Method');
	res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
	next();
});
//routes
app.use('/api/companies',companyRoutes);
app.use('/api/offices',officeRoutes);
app.use('/api/positions',positionRoutes);
app.use('/api/users',userRoutes);
app.use('/api/confirmations', confirmRoutes);
app.use('/api/documents',documentRoutes);
app.use('/api/admConditions',admConditionRoutes);
app.use('/api/products',productRoutes);
app.use('/api/acquisitionRequests',acquisitionRequestRoutes);
app.use('/api/files',uploadFileRoutes);
app.use('/api/technicalReports',technicalReportRoutes);
app.use('/api/budgetCertifications',budgetCertificationRoutes);
app.use('/api/status',statusRoutes);
app.use('/api/procedures',procedureRoutes);
app.use('/api/proposalProviders',proposalProviderRoutes);
app.use('/api/proposalEvaluations',proposalEvaluationRoutes);
app.use('/api/proposalComparisons', proposalComparisonRoutes);
app.use('/api/processStarts',processStartRoutes);
app.use('/api/purchaseOrders',purchaseOrderRoutes);
app.use('/api/technicalEvaluations',technicalEvaluationRoutes);
app.use('/api/legalContracts', legalContractRoutes);
app.use('/api/specifications',specificationRoutes);

app.use('/uploads', express.static(path.resolve('uploads')));

// Configuracion para subir el backend y el front en un solo puerto

app.use('/', express.static('client', {redirect: false}));
app.get('*', function(req, res, next) {
    res.sendFile(path.resolve('client/index.html'));
});

export default app;