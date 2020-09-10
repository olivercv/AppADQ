import { Router } from 'express';
const router = Router();

import {getPositions, getPosition, createPosition, updatePosition, deletePosition} from '../controllers/position.controller'

router.get('/', getPositions);
router.get('/:id',getPosition);
router.post('/',createPosition);
router.put('/:id',updatePosition);
router.delete('/:id',deletePosition);

export default router;
