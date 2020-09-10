import { Router } from 'express';
const router = Router();

import {getTechnicalEvaluations, getTechnicalEvaluation, createTechnicalEvaluation, updateTechnicalEvaluation, deleteTechnicalEvaluation, getTED} from '../controllers/technicalEvaluation.controller';

router.get('/',getTechnicalEvaluations);
router.get('/:id',getTechnicalEvaluation);
router.post('/',createTechnicalEvaluation);
router.put('/:id',updateTechnicalEvaluation);
router.delete('/:id',deleteTechnicalEvaluation);
router.get('/all/:id',getTED);

export default router;