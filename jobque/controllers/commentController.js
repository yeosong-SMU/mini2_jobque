import { createComment, updateComment, removeComment } from "../models/JobqueDAO.js";

// 댓글 생성
export const create_Comment = async (req, res) => {
    const users_id = req.session.users_id;
    const {board_id, comment} = req.body;

    await createComment(users_id, board_id, comment);
    res.redirect('/jobque/detail');
};

// 댓글 수정
export const update_Comment = async (req, res) => {
    const comment_id = req.session.comment_id;
    const comment = req.body;
    
    await updateComment(comment, comment_id);
    res.redirect('/jobque/detail');
};

// 댓글 삭제
export const remove_Comment = async(req, res) => {
    const {comment_id} = req.session.comment_id;

    await removeComment(comment_id);
    res.redirect('/jobque/detail');
};