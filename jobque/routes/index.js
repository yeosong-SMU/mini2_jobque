import {Router} from 'express';
<<<<<<< HEAD
import { getRegister, postRegister, getLogin, postLogin, logout } from '../controllers/usersController.js';
=======
// import { getRegister, postRegister, getLogin, postLogin, main
//     // logout, update, remove

// } from '../controllers/usersController.js';
// >>>>>>> d15cef27f21611ee98248e7da043e8592fe84a3b
const router = Router();

router.get('/register', getRegister);
router.post('/register', postRegister);
//router.get('/login', getLogin);    //로그인 화면으로
router.post('/login', postLogin);    //로그인 체크 처리
<<<<<<< HEAD
router.get('/logout', logout);
//router.get('/main', main);
=======
// router.get('/logout', logout);
router.get('/main', main);
>>>>>>> d15cef27f21611ee98248e7da043e8592fe84a3b
// router.post('/update', update);
// // router.post('/remove', remove);

export default router;