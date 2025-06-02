import { createComment, updateComment, removeComment } from "../models/JobqueDAO.js";

// 댓글 조회
// export const clickQues = async (req, res) => {
//     const users_id = req.session.users_id;
//     const board_id = req.params.board_id;
//     console.log("board_id: " + board_id);
//     //req.session.board_id = board_id;
//     const [result] = await detailQues(board_id);
//     const [comment_list] = await listComment(users_id, board_id);
//     res.render("answer/answer_list", { session: req.session, question:result, comments: comment_list });
// };

// 댓글 생성
export const create_Comment = async (req, res) => {
    const users_id = req.session.users_id;
    const {board_id, comment} = req.body;

    await createComment(users_id, board_id, comment);
    res.redirect('/jobque/answer/answer_list');
};

// 댓글 수정
export const update_Comment = async (req, res) => {
    const comment_id = req.params.comments_id;
    const comment = req.params.comments;
    console.log("comment_id : " + comment_id);
    console.log("comment : " + comment);
    await updateComment(comment, comment_id);
    res.redirect('/jobque/answer/answer_list');
};

// 댓글 삭제
export const remove_Comment = async(req, res) => {
    const {comment_id} = req.session.comment_id;

    await removeComment(comment_id);
    res.redirect('/jobque/answer/answer_list');
};

export const getCreateC = (req, res) => {
    res.render('answer/answer_form', {session: req.session});
};