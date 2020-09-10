import { Router } from 'express';
const router = Router();

import {getBudgetCertifications, getBudgetCertification, createBudgetCertification, updateBudgetCertification, deleteBudgetCertification, getBC} from '../controllers/budgetCertification.controller';

router.get('/',getBudgetCertifications);
router.get('/:id',getBudgetCertification);
router.post('/',createBudgetCertification);
router.put('/:id',updateBudgetCertification);
router.delete('/:id',deleteBudgetCertification);
router.get('/all/:id',getBC);

export default router;