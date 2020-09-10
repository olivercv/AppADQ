import { Router } from 'express';
const router = Router();

import {getProposalComparisons, getProposalComparison, createProposalComparison, updateProposalComparison, deleteProposalComparison, getPCD} from '../controllers/proposalComparison.controller';

router.get('/',getProposalComparisons);
router.get('/:id',getProposalComparison);
router.post('/',createProposalComparison);
router.put('/:id',updateProposalComparison);
router.delete('/:id',deleteProposalComparison);
router.get('/all/:id',getPCD);

export default router;