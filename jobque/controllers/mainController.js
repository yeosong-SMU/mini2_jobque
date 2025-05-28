import { createMember, loginMember, findAll, findByUserId } from "../models/JobqueDAO.js";

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