import { findByUserId, listQues, detailQues, listComment, createQues, updateQues, removeQues } from "../models/JobqueDAO.js";

// 로그인 후 나의 페이지
export const main = async (req, res) => {
    //user의 id를 받아서 그걸로 listQues 출력
    //let member = null;
    let questions = [];
    //let basic = [];

    if(!req.session.userid) {
        return res.redirect('/jobque/login');
    }

    // const list = await listQues(req.session.users_id);

    // res.render("main", {list: list});
        //member = await findByUserId(req.session.userid);
        questions = await listQues(req.session.users_id, req.session.users_id);
        //basic = await listBasic(member.id, member.id);
        // console.log(member);
        //console.log(questions);
        //console.log(basic);
        //console.log(req.session);
        res.render('main', {session: req.session, questions: questions});


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
    const board_id = req.params.board_id;
    
    //req.session.board_id = board_id;
    const [result] = await detailQues(board_id);
    const comment_list = await listComment(users_id, board_id); ///:board_id
    console.log(board_id);
    res.render("answer/answer_list", { session: req.session, question:result, comments: comment_list });
};

// 질문 업데이트
export const update_Ques = async (req, res) => {
    const { board_id, category, ques } = req.body;
    
    await updateQues(category, ques, board_id);
    res.redirect('/jobque/main');
};

// 질문 삭제
export const remove_Ques = async(req, res) => {
    const board_id = req.body;

    await removeQues(board_id);
    res.redirect('/jobque/main');
};

export const getCreateQ = (req, res) => {
    res.render('question/question_form', {session: req.session});
};

export const getListQ = (req, res) => {
    res.render('question/question_list', {session: req.session});
};