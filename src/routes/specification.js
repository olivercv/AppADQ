import { Router } from 'express';
const router = Router();

import {getSpecifications, getSpecification, createSpecification, updateSpecification, deleteSpecification, getSP} from '../controllers/specification.controller';

router.get('/',getSpecifications);
router.get('/:id',getSpecification);
router.post('/',createSpecification);
router.put('/:id',updateSpecification);
router.delete('/:id',deleteSpecification);
router.get('/all/:id',getSP);

export default router;