import { Router } from 'express';
import { getProposalProviders, getProposalProvider, createProposalProvider, updateProposalProvider, deleteProposalProvider, getPPForm } from '../controllers/proposalProvider.controller';
const router = Router();


router.post('/',createProposalProvider);
router.get('/',getProposalProviders);
router.get('/:id',getProposalProvider);
router.put('/:id',updateProposalProvider);
router.delete('/:id',deleteProposalProvider);
router.get('/form/:id',getPPForm);

export default router;