import {Router} from 'express';
import { getRegister, postRegister, getLogin, postLogin, logout, showPopup } from '../controllers/usersController.js';
import { main } from '../controllers/quesController.js';


// import { getRegister, postRegister, getLogin, postLogin, main
//     // logout, update, remove

// } from '../controllers/usersController.js';
const router = Router();

router.get('/register', getRegister);
router.post('/register', postRegister);
router.get('/login', getLogin);    //로그인 화면으로
router.post('/login', postLogin);    //로그인 체크 처리
router.get('/logout', logout);
router.get('/main', main);
router.get('/popup', showPopup);
// router.post('/update', update);
// // router.post('/remove', remove);

export default router;