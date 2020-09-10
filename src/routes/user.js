import { Router } from 'express';

const router = Router();
import { ensureAuth } from '../middlewares/authenticated'
import {getUsers, getUser, createUser, updateUser, deleteUser, register, signin} from '../controllers/user.controller';

router.get('/', ensureAuth, getUsers);
router.get('/:id',getUser);
router.post('/',createUser);
router.put('/:id', ensureAuth, updateUser);
router.delete('/:id',ensureAuth, deleteUser);
router.post('/signup', register);
router.post('/signin', signin);

export default router;
