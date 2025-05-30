import { findByUserId, listQues, detailQues, listComment, createQues, updateQues, removeQues } from "../models/JobqueDAO.js";

// 로그인 후 나의 페이지
export const main = async (req, res) => {
    //user의 id를 받아서 그걸로 listQues 출력
    let member = null;
    let questions = [];

    if(!req.session.userid) {
        res.redirect('/jobque/login');
    }

    // const list = await listQues(req.session.users_id);

    // res.render("main", {list: list});
        member = await findByUserId(req.session.userid);
        questions = await listQues(member.id)
        res.render('main', {member: member, session: req.session, questions: questions,});


    // const member = req.session.userid
    //     ? await findByUserId(req.session.userid)
    //     : null;
    
    // res.render('main', {member: member, session: req.session});
};

// 질문 생성
export const create_Ques = async (req, res) => {
    const users_id = req.session.users_id;
    const {category, ques} = req.body;

    await createQues(users_id, category, ques);
    res.redirect('/jobque/main');
};


// 질문 클릭
export const clickQues = async (req, res) => {
    const users_id = req.session.users_id;
    const board_id = req.session.board_id;

    const [result] = await detailQues(board_id);
    const [comment_list] = await listComment(users_id, board_id);
    res.render("detail", { row: result[0], comment_list: comment_list });
};

// 질문 업데이트
export const update_Ques = async (req, res) => {
    const board_id = req.session.board_id;
    const { category, ques } = req.body;
    
    await updateQues(category, ques, board_id);
    res.redirect('/jobque/main');
};

// 질문 삭제
export const remove_Ques = async(req, res) => {
    const {board_id} = req.session.board_id;

    await removeQues(board_id);
    res.redirect('/jobque/main');
};