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

export const findAll = async () => {
    const [rows] = await pool.execute('select * from jq_users');
    return rows;
};

// export const updateMember = async (userid, name) => {
//     const sql = 'update member set name = ? where userid = ?';
//     return pool.execute(sql, [name, userid]);
// };

// export const removeMember = async (userid) => {
//     const sql = 'delete from member where userid = ?';
//     return db.execute(sql, [userid]);
// };