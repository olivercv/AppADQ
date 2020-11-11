import { Router } from 'express';
const router = Router();

import {getRoles, getRole, createRole, updateRole, deleteRole} from '../controllers/role.controller';

router.get('/',getRoles);
router.get('/:id',getRole);
router.post('/',createRole);
router.put('/:id',updateRole);
router.delete('/:id',deleteRole);

export default router;