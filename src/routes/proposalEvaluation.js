import { Router } from 'express';
import { getProposalEvaluations, getProposalEvaluation, createProposalEvaluation, updateProposalEvaluation, deleteProposalEvaluation, getPEP } from '../controllers/proposalEvaluation.controller';
const router = Router();


router.post('/',createProposalEvaluation);
router.get('/',getProposalEvaluations);
router.get('/:id',getProposalEvaluation);
router.put('/:id',updateProposalEvaluation);
router.delete('/:id',deleteProposalEvaluation);
router.get('/all/:id',getPEP);

export default router;