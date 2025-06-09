import { findByUserId, listQues, detailQues, categoryQues, listComment, createQues, updateQues, removeQues } from "../models/JobqueDAO.js";

// 로그인 후 나의 페이지
export const main = async (req, res) => {
    //user의 id를 받아서 그걸로 listQues 출력
    const users_id = req.session.users_id;
    const {category} = req.query;
    let questions = [];

    if(!users_id) {
        return res.redirect('/jobque/login');
    }

    if(category && category !== '') {
        questions = await categoryQues(users_id, category);
    } else {
        questions = await listQues(users_id);
    }

    res.render('main', {session: req.session, questions: questions, category: category});
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
    
    const [result] = await detailQues(board_id);
    const comment_list = await listComment(users_id, board_id); ///:board_id
    res.render("answer/answer_list", { session: req.session, question:result, comments: comment_list });
};

// 질문 업데이트
export const update_Ques = async (req, res) => {
    const { board_id, category, ques } = req.body;
    
    await updateQues(category, ques, board_id);
    res.redirect('/jobque/question/list');
};

// 질문 삭제
export const remove_Ques = async(req, res) => {
    const board_id = req.params.board_id;

    await removeQues(board_id);
    res.redirect('/jobque/question/list');
};

export const getCreateQ = async(req, res) => {
    res.render('question/question_form', {session: req.session});
};

export const getListQ = async(req, res) => {
    const users_id = req.session.users_id;
    const {category} = req.query;
    let questions = [];
    //console.log("선택된 카테고리:", category);

    if(category && category !== '') {
        questions = await categoryQues(users_id, category);
    } else {
        questions = await listQues(users_id);
    }
    
    res.render('question/question_list', {session: req.session, questions: questions, category: category});
};

export const getUpdateQ = async(req, res) => {
    const board_id = req.params.board_id;
    const [result] = await detailQues(board_id);

    res.render('question/question_edit', {session: req.session, question: result});
};