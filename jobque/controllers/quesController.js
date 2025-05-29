import { listQues, detailQues, createQues, updateQues, removeQues } from "../models/JobqueDAO.js";

// export const list = async (req, res) => {
//     if(!req.session.userid || req.session.user_type !== 'admin') {
//         res.redirect('/member/login?msg=authority');
//     }
//     const members = await findAll();
//     res.render('list', {members});
// };

// 로그인 후 나의 페이지
export const main = async (req, res) => {
    // if(!req.session.userid) {
    //     res.redirect('/jopque/login?msg=authority');
    // }

    // const list = await listQues(req.session.users_id);

    // res.render("main", {list: list});
    //user의 id를 받아서 그걸로 listQues 출력
    //const member = await findByUserId(req.session.userid);

    const member = req.session.userid
        ? await findByUserId(req.session.userid)
        : null;
    
    res.render('main', {member: member, session: req.session});
};

// 질문 생성
export const insertQues = async (req, res) => {
    const users_id = req.session.users_id;
    const {category, ques} = req.body;

    await createQues(users_id, category, ques);
    res.redirect('/jopque/main');
    // const {users_id} = req.params;
    // const { category, ques } = req.body;
    // await updateMember(category, ques);
    // res.redirect('/jopque/main');
};


// 질문 클릭
export const clickQues = async (req, res) => {
    const {board_id} = req.body;

    res.redirect("/de")

    // const {users_id} = req.params;
    // const { category, ques } = req.body;
    // await updateMember(category, ques);
    // res.redirect('/jopque/main');
};

// 질문 업데이트
export const updateComment = async (req, res) => {
    const { userid, name } = req.body;
    await updateMember(userid, name);
    res.redirect('/jopque/main');
};

// 질문 삭제

// export const remove = async(req, res) => {
//     const {userid} = req.body;
//     await removeMember(userid);
//     res.redirect('/member/list');
// };