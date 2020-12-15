import { Router } from 'express';

const router = Router();
import { ensureAuth } from '../middlewares/authenticated'
import {getUsers, getUser, createUser, updateUser, deleteUser, register, signin, updatePassword,resetEmail, resetPassword} from '../controllers/user.controller';

router.get('/', getUsers);
router.get('/:id',getUser);
router.post('/',createUser);
router.put('/:id', ensureAuth, updateUser);
router.delete('/:id',ensureAuth, deleteUser);
router.post('/signup', register);
router.post('/signin', signin);
router.put('/password/:id',ensureAuth, updatePassword);
router.put('/resetPassword/:token', resetPassword);
//router.post('/sendEmail', sendEmail);
router.put('/resetEmail/:email',resetEmail);

export default router;
