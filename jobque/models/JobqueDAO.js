import {pool} from './db.js';

// 회원 관리
export const createMember = async (userid, pwd, name) => {
    return pool.execute('insert into jq_users (userid, pwd, name) values (?, sha2(?, 256), ?)', [userid, pwd, name]);
};

export const loginMember = async (userid, pwd) => {
    const [rows] = await pool.execute('select * from jq_users where userid = ? and pwd = sha2(?, 256)', [userid, pwd]);
    return rows[0];
};

export const findByUserId = async (userid) => {
    const [rows] = await pool.execute('select * from jq_users where userid = ?', [userid]);
    return rows[0];
};

// export const findAll = async () => {
//     const [rows] = await pool.execute('select * from jq_users');
//     return rows;
// };

// export const updateMember = async (userid, name) => {
//     const sql = 'update member set name = ? where userid = ?';
//     return pool.execute(sql, [name, userid]);
// };

// export const removeMember = async (userid) => {
//     const sql = 'delete from member where userid = ?';
//     return pool.execute(sql, [userid]);
// };

// 조회
export const listQues = async (users_id) => {
    const [rows] = await pool.execute('select id, users_id, category, ques, basic, post_date, (select comment from jq_comment where board_id = b.id and users_id = ? order by id desc limit 1) comment from jq_board b where users_id = ? or users_id = 1', [users_id, users_id]);
    return rows;
};

// export const listBasic = async (users_id) => {
//     const [rows] = await pool.execute('select b.id, b.users_id, c.users_id, category, ques, basic, b.post_date, (select comment from jq_comment where board_id = b.id and users_id = ? order by id desc limit 1) comment from jq_board b, jq_comment c where b.users_id = 1', [users_id]);
//     return rows;
// };

export const detailQues = async (board_id) => {
    const [rows] = await pool.execute('select * from jq_board where id = ?', [board_id]);
    return rows;
};

export const listComment = async (users_id, board_id) => {
    const [rows] = await pool.execute('select * from jq_comment where users_id = ? and board_id = ?', [users_id, board_id]);
    return rows;
};

// 생성
export const createQues = async (users_id, category, ques) => {
    return pool.execute('insert into jq_board (users_id, category, ques) values (?, ?, ?)', [users_id, category, ques]);
};

export const createComment = async (users_id, board_id, comment) => {
    return pool.execute('insert into jq_comment (users_id, board_id, comment) values (?, ?, ?)', [users_id, board_id, comment]);
};

// 수정
export const updateQues = async (category, ques, board_id) => {
    return pool.execute("update jq_board set category=?, ques=?, post_date=now() where id=?", [category, ques, board_id]);
};

export const updateComment = async (comment, comment_id) => {
    return pool.execute("update jq_comment set comment=?, post_date=now() where id=?", [comment, comment_id]);
};

// 삭제
export const removeQues = async (board_id) => {
    return pool.execute('delete from jq_board where id = ?', [board_id]);
};

export const removeComment = async (comment_id) => {
    return pool.execute('delete from jq_comment where id = ?', [comment_id]);
};