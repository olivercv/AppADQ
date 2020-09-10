import { Router } from 'express';
const router = Router();

import {getAcquisitionRequests, getAcquisitionRequest, createAcquisitionRequest, updateAcquisitionRequest, deleteAcquisitionRequest, getADQRequest} from '../controllers/acquisitionRequest.controller';

router.get('/',getAcquisitionRequests);
router.get('/:id',getAcquisitionRequest);
router.post('/',createAcquisitionRequest);
router.put('/:id',updateAcquisitionRequest);
router.delete('/:id',deleteAcquisitionRequest);

router.get('/all/:id',getADQRequest);

export default router;