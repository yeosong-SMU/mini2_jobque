import { createComment, updateComment, removeComment, detailQues, detailComment, listComment} from "../models/JobqueDAO.js";

// 댓글 생성
export const create_Comment = async (req, res) => {
    const users_id = req.session.users_id;
    const {board_id, comment} = req.body;

    await createComment(users_id, board_id, comment);
    res.redirect('/jobque/answer/list/'+board_id);
};

// 댓글 수정
export const update_Comment = async (req, res) => {
    const {comment_id, comment, board_id} = req.body;
    //const board_id = req.params.board_id;
    //const users_id = req.session.users_id;
    //console.log('1');
    await updateComment(comment, comment_id);
    //console.log('2');
    //const [result] = await detailQues(board_id);
    //const comment_list = await listComment(users_id, board_id);
    res.redirect('/jobque/answer/list/' + board_id);
    //console.log('3');
    //res.redirect('/jobque/main');
};

// 댓글 삭제
export const remove_Comment = async(req, res) => {
    // const comment_id = Number(req.body.comment_id);
    // const board_id = Number(req.body.board_id);
    const {comment_id, board_id} = req.body;
    
    await removeComment(comment_id);
    res.redirect('/jobque/answer/list/' + board_id);
};

export const getCreateC = async(req, res) => {
    const board_id = req.query.board_id;
    const [result] = await detailQues(board_id);
    res.render('answer/answer_form', {session: req.session, question:result});
};

export const getEditC = async(req, res) => {
    const comment_id = req.params.comment_id;
    const board_id = req.params.board_id;
    const [question] = await detailQues(board_id);
    const [comment] = await detailComment(comment_id);
    res.render('answer/answer_edit', {session: req.session, question:question, comment:comment});
};