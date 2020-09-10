import { Router } from 'express';
const router = Router();

import {getAdmConditions, getAdmCondition, createAdmCondition, updateAdmCondition, deleteAdmCondition, getAdmConditionRequest} from '../controllers/admCondition.controller';

router.get('/',getAdmConditions);
router.get('/:id',getAdmCondition);
router.get('/request/:requestId',getAdmConditionRequest);
router.post('/',createAdmCondition);
router.put('/:id',updateAdmCondition);
router.delete('/:id',deleteAdmCondition);




export default router;