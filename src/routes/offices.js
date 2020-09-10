import { Router } from 'express';
const router = Router();

import {getOffices, getOffice, createOffice, updateOffice, deleteOffice, getOF} from '../controllers/office.controller';


router.get('/',getOffices);
router.get('/:id',getOffice);
router.post('/', createOffice);
router.put('/:id',updateOffice);
router.delete('/:id',deleteOffice);
router.get('/all/:id',getOF);

export default router;
