import { createMember, loginMember, findAll, findByUserId } from "../models/JobqueDAO.js";

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

// export const list = async (req, res) => {
//     if(!req.session.userid || req.session.user_type !== 'admin') {
//         res.redirect('/member/login?msg=authority');
//     }
//     const members = await findAll();
//     res.render('list', {members});
// };

export const main = async (req, res) => {
    if(!req.session.userid) {
        res.redirect('/jopque/login?msg=authority');
    }
    const member = await findByUserId(req.session.userid);
    res.render('main', {member: member, session: req.session});
};

export const updateBoard = async (req, res) => {
    const {users_id} = req.params;
    const { category, ques } = req.body;
    await updateMember(category, ques);
    res.redirect('/jopque/main');
};

export const updateComment = async (req, res) => {
    const { userid, name } = req.body;
    await updateMember(userid, name);
    res.redirect('/jopque/main');
};

// export const remove = async(req, res) => {
//     const {userid} = req.body;
//     await removeMember(userid);
//     res.redirect('/member/list');
// };