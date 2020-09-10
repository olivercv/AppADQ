import { Router } from 'express';
import expressFileUpload from 'express-fileupload';
const router = Router();
router.use(expressFileUpload());

import {uploadFile, getFile} from '../controllers/uploadFile.controller';

router.put('/:id', uploadFile);
router.get('/:src',getFile);

export default router;