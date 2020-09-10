import { Router } from 'express';
const router = Router();

import {getProcessStarts, getProcessStart, createProcessStart, updateProcessStart, deleteProcessStart, getPSD} from '../controllers/processStart.controller';

router.get('/',getProcessStarts);
router.get('/:id',getProcessStart);
router.post('/',createProcessStart);
router.put('/:id',updateProcessStart);
router.delete('/:id',deleteProcessStart);
router.get('/all/:id',getPSD);

export default router;