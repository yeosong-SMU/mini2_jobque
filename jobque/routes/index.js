// import {Router} from 'express';
// import { getRegister, postRegister, getLogin, postLogin, logout, main, update, remove } from '../controllers/usersController.js';
// const router = Router();

// router.get('/register', getRegister);
// router.post('/register', postRegister);
// router.get('/login', getLogin);    //로그인 화면으로
// router.post('/login', postLogin);    //로그인 체크 처리
// router.get('/logout', logout);
// router.get('/list', list);
// router.get('/main', main);
// router.post('/update', update);
// router.post('/remove', remove);

// export default router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;