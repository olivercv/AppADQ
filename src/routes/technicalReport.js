import { Router } from 'express';
const router = Router();

import {getTechnicalReports, getTechnicalReport, createTechnicalReport, updateTechnicalReport, deleteTechnicalReport, getTR} from '../controllers/technicalReport.controller';

router.get('/',getTechnicalReports);
router.get('/:id',getTechnicalReport);
router.post('/',createTechnicalReport);
router.put('/:id',updateTechnicalReport);
router.delete('/:id',deleteTechnicalReport);
router.get('/all/:id',getTR);

export default router;