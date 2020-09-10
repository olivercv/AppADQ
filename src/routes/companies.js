import { Router } from 'express';
const router = Router();

import {getCompanies, getCompany, createCompany, updateCompany, deleteCompany} from '../controllers/company.controller';

router.get('/',getCompanies);
router.get('/:id',getCompany);
router.post('/',createCompany);
router.put('/:id',updateCompany);
router.delete('/:id',deleteCompany);


export default router;