import { Router } from 'express';
import { getDocuments, getDocument, createDocument, updateDocument, deleteDocument, getDocumentForm } from '../controllers/document.controller';
const router = Router();


router.post('/',createDocument);
router.get('/',getDocuments);
router.get('/:id',getDocument);
router.put('/:id',updateDocument);
router.delete('/:id',deleteDocument);
router.get('/form/:id',getDocumentForm);


export default router;