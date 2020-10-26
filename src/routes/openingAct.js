import { Router } from 'express';
const router = Router();

import {getOpeningActs, getOpeningAct, createOpeningAct, updateOpeningAct, deleteOpeningAct, getOA} from '../controllers/openingAct.controller';

router.get('/',getOpeningActs);
router.get('/:id',getOpeningAct);
router.post('/',createOpeningAct);
router.put('/:id',updateOpeningAct);
router.delete('/:id',deleteOpeningAct);
router.get('/all/:id',getOA);

export default router;