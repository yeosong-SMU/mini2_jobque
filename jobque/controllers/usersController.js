import { createMember, loginMember } from "../models/JobqueDAO.js";

export const getRegister = (req, res) => {
    res.render('register');
};

export const postRegister = async (req, res) => {
    const { userid, pwd, name } = req.body;
    await createMember(userid, pwd, name);
    res.redirect('/jobque/login');
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

// export const list = async (req, res) => {
//     if(!req.session.userid || req.session.user_type !== 'admin') {
//         res.redirect('/member/login?msg=authority');
//     }
//     const members = await findAll();
//     res.render('list', {members});
// };

// export const main = async (req, res) => {
//     if(!req.session.userid) {
//         res.redirect('/jopque/login?msg=authority');
//     }
//     const member = req.session.userid
//         ? await findByUserId(req.session.userid)
//         : null;

//     res.render('main', { member: member, session: req.session, questions: questions });
// };

// export const updateBoard = async (req, res) => {
//     const {users_id} = req.params;
//     const { category, ques } = req.body;
//     await updateMember(category, ques);
//     res.redirect('/jopque/main');
// };

// export const updateComment = async (req, res) => {
//     const { userid, name } = req.body;
//     await updateMember(userid, name);
//     res.redirect('/jopque/main');
// };

// export const remove = async(req, res) => {
//     const {userid} = req.body;
//     await removeMember(userid);
//     res.redirect('/member/list');
// };
