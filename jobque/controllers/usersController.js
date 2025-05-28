import { createMember, loginMember } from "../models/JobqueDAO.js";

export const getRegister = (req, res) => {
    res.render('register');
};

export const postRegister = async (req, res) => {
    const { userid, pwd, name } = req.body;
    await createMember(userid, pwd, name);
    res.redirect('/jopque/login?msg=success');
};

export const getLogin = (req, res) => {
    const msg = req.query.msg || null;
    res.render('login', {msg});
};

export const postLogin = async (req, res) => {
    const { userid, pwd } = req.body;
    const row = await loginMember(userid, pwd);
    const user = row;
    if(user) {
        //req.session.user_type = user.user_type;
        req.session.users_id = user.id;
        req.session.userid = user.userid;
        req.session.username = user.name;
        res.redirect('/jopque/main');
        // if(req.session.user_type === 'admin') {
        //     res.redirect('/jopque/list');
        // } else {
        //     res.redirect('/jopque/main');
        // }
    } else {
        res.redirect('/jopque/login?msg=fail');
    }
};

export const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/jopque/login?msg=logout');
    });
};