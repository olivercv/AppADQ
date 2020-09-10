import { Router } from 'express';
const router = Router();

import {getConfirmations, getConfirmation, createConfirmation, updateConfirmation, deleteConfirmation, getConf} from '../controllers/confirmForm.controller';


router.get('/',getConfirmations);
router.get('/:id',getConfirmation);
router.post('/', createConfirmation);
router.put('/:id',updateConfirmation);
router.delete('/:id',deleteConfirmation);
router.get('/all/:id',getConf);

export default router;
