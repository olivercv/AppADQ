import { Router } from 'express';
import expressFileUpload from 'express-fileupload';
const router = Router();
router.use(expressFileUpload());

import {uploadFile, getFile, uploadFiles} from '../controllers/uploadFile.controller';

router.put('/:id', uploadFile);
router.put('/dropzone/:id', uploadFiles);
router.get('/:src',getFile);


export default router;