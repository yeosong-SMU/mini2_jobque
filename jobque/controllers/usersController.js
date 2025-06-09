import { createMember, loginMember, findByUserId } from "../models/JobqueDAO.js";

export const getRegister = (req, res) => {
    res.render('register');
};

export const postRegister = async (req, res) => {
    const { userid, pwd, name } = req.body;
    await createMember(userid, pwd, name);
    res.redirect('/jobque/login');
};

export const checkId = async (req, res) => {
    const { userid } = req.query;
    const user = await findByUserId(userid);
    
    res.json({ exists: !!user });  //중복이면 true
};

export const getLogin = (req, res) => {
    res.render('login');
};

export const postLogin = async (req, res) => {
    const { userid, pwd } = req.body;
    const row = await loginMember(userid, pwd);
    const user = row;
    console.log("로그인 성공");
    if(user) {
        req.session.userid = user.userid;
        req.session.name = user.name;
        req.session.users_id = user.id;
        res.redirect('/jobque/main');
    } else {
        res.redirect('/jobque/login');
    }
};

export const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/jobque/login');
    });
};

export const showPopup = (req, res) => {
  res.render('popup'); 
};