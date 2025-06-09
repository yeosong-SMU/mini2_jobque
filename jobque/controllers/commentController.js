import { createComment, updateComment, removeComment, detailQues} from "../models/JobqueDAO.js";

// 댓글 생성
export const create_Comment = async (req, res) => {
    const users_id = req.session.users_id;
    const {board_id, comment} = req.body;

    await createComment(users_id, board_id, comment);
    res.redirect('/jobque/answer/list/'+board_id);
};

// 댓글 수정
export const update_Comment = async (req, res) => {
    const {comment_id, comment} = req.body;
    const board_id = Number(req.body.board_id);

    await updateComment(comment, comment_id);
    res.redirect('/jobque/answer/list/'+board_id);
};

// 댓글 삭제
export const remove_Comment = async(req, res) => {
    const comment_id = Number(req.body.comment_id);
    const board_id = Number(req.body.board_id);
    
    await removeComment(comment_id);
    res.redirect('/jobque/answer/list/' + board_id);
};

export const getCreateC = async(req, res) => {
    const board_id = req.query.board_id;
    const [result] = await detailQues(board_id);
    res.render('answer/answer_form', {session: req.session, question:result});
};