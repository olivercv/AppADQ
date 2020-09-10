import { Router } from 'express';
const router = Router();

import {getLegalContracts, getLegalContract, createLegalContract, updateLegalContract, deleteLegalContract, getLCD} from '../controllers/legalContract.controller';

router.get('/',getLegalContracts);
router.get('/:id',getLegalContract);
router.post('/',createLegalContract);
router.put('/:id',updateLegalContract);
router.delete('/:id',deleteLegalContract);
router.get('/all/:id',getLCD);

export default router;