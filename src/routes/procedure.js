import { Router } from 'express';
const router = Router();

import {getProcedures, getProcedure, createProcedure, updateProcedure, deleteProcedure, getProcedureByOrder, getProcedureByCategoryOrder, getProcedureStatus} from '../controllers/procedure.controller';

router.get('/',getProcedures);
router.get('/:id',getProcedure);
router.get('/byrole/:roleId', getProcedureStatus);
router.get('/byorder/:order',getProcedureByOrder);
router.get('/bycatorder/:category/:order', getProcedureByCategoryOrder)
router.post('/',createProcedure);
router.put('/:id',updateProcedure);
router.delete('/:id',deleteProcedure);
router.get('/ps/:id',getProcedureStatus);

export default router;