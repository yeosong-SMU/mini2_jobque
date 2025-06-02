import {Router} from 'express';
import { getRegister, postRegister, getLogin, postLogin, logout, showPopup } from '../controllers/usersController.js';
import { main, create_Ques, clickQues, getListQ, remove_Ques, update_Ques, getCreateQ } from '../controllers/quesController.js';
import { create_Comment, getCreateC, update_Comment, remove_Comment} from '../controllers/commentController.js';

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

//router.get('/question/list', getListQ);
router.get('/question/form', getCreateQ);
router.post('/question/write', create_Ques);

router.get('/answer/list/:id', clickQues);
router.get('/answer/form', getCreateC);
router.post('/answer/write', create_Comment);
router.post('/comment/update', update_Comment);
router.post('/comment/update', remove_Comment);
//router.post('/update', update);
// router.post('/remove', remove);

export default router;