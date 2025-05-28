import {pool} from './db.js';

//회원 관리
export const createMember = async(userid, pwd, name) => {
    return db.execute('insert into jq_users (userid, pwd, name) values (?, sha2(?, 256), ?)', [userid, pwd, name]);
};

export const loginMember = async(userid, pwd) => {
    const [rows] = await db.execute('select * from jq_users where userid = ? and pwd = sha2(?, 256)', [userid, pwd]);
    return rows[0];
};

// export const findByUserId = async (userid) => {
//     const [rows] = await db.execute('select * from jq_users where userid = ?', [userid]);
//     return rows[0];
// };

// export const findAll = async () => {
//     const [rows] = await db.execute('select * from member');
//     return rows;
// };

// export const updateMember = async (userid, name) => {
//     const sql = 'update member set name = ? where userid = ?';
//     return db.execute(sql, [name, userid]);
// };

// export const removeMember = async (userid) => {
//     const sql = 'delete from member where userid = ?';
//     return db.execute(sql, [userid]);
// };

//조회
export const list = async(users_id) => {
    return db.execute('select * from jq_board where users_id = ?', [users_id]);
};

export const detail = async(userid, pwd, name) => {
    return db.execute('insert into jq_comment (userid, pwd, name) values (?, sha2(?, 256), ?)', [userid, pwd, name]);
};

//수정


//생성
export const createQues = async(users_id, category, ques) => {
    return db.execute('insert into jq_board (users_id, category, ques) values (?, ?, ?)', [users_id, category, ques]);
};

export const createComment = async(users_id, board_id, comment) => {
    return db.execute('insert into jq_comment (users_id, board_id, comment) values (?, ?, ?)', [users_id, board_id, comment]);
};

//삭제
export const removeQues = async (board_id) => {
    return db.execute('delete from jq_board where id = ?', [board_id]);
};

export const removeComment = async (comment_id) => {
    return db.execute('delete from jq_comment where id = ?', [comment_id]);
};