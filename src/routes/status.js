import { Router } from 'express';
const router = Router();

import {getStatuss, getStatus, createStatus, updateStatus, deleteStatus, getCurrentStatus, getStatusByRequest, getStatusPositionId, getStatusByUserId, getStatusByRequestForm, getStatusByRequestAndProcedure, getStatusByFormId} from '../controllers/status.controller';

router.get('/',getStatuss);
router.get('/:id',getStatus);
router.get('/byrequest/:codeRequest', getStatusByRequest);
router.get('/detailForms/:codeRequest', getStatusByRequestForm);
router.get('/formId/:formId', getStatusByFormId);
router.get('/getByProcedure/:codeRequest/:procedureId', getStatusByRequestAndProcedure);
router.get('/current/:codeRequest',getCurrentStatus);
router.post('/',createStatus);
router.put('/:id',updateStatus);
router.delete('/:id',deleteStatus);
router.get('/positionId/:id/:procedureId/:userId',getStatusPositionId);
router.post('/statusById/', getStatusByUserId);

export default router;