import {Router} from 'express';
import { getRegister, postRegister, getLogin, postLogin, logout, checkId, showPopup } from '../controllers/usersController.js';
import { main, create_Ques, clickQues, getListQ, remove_Ques, update_Ques, getCreateQ, getUpdateQ } from '../controllers/quesController.js';
import { create_Comment, getCreateC, update_Comment, remove_Comment} from '../controllers/commentController.js';

const router = Router();

router.get('/register', getRegister);
router.post('/register', postRegister);
router.get('/login', getLogin);    //로그인 화면으로
router.post('/login', postLogin);    //로그인 체크 처리
router.get('/logout', logout);
router.get('/checkid', checkId);

router.get('/main', main);
router.get('/popup', showPopup);

router.get('/question/list', getListQ);
router.get('/question/form', getCreateQ);
router.get('/question/form/:board_id', getUpdateQ);
router.post('/question/write', create_Ques);
router.post('/question/delete/:board_id', remove_Ques);
router.post('/question/update', update_Ques);

router.get('/answer/list/:board_id', clickQues);
router.get('/answer/form', getCreateC);
router.post('/answer/write', create_Comment);
router.post('/comment/update', update_Comment);
router.post('/comment/delete', remove_Comment);

export default router;