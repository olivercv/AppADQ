import { Router } from 'express';
const router = Router();

import {getPurchaseOrders, getPurchaseOrder, createPurchaseOrder, updatePurchaseOrder, deletePurchaseOrder, getPOD} from '../controllers/purchaseOrder.controller';

router.get('/',getPurchaseOrders);
router.get('/:id',getPurchaseOrder);
router.post('/',createPurchaseOrder);
router.put('/:id',updatePurchaseOrder);
router.delete('/:id',deletePurchaseOrder);
router.get('/all/:id',getPOD);

export default router;