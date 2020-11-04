const db = require('../utils/db')

const getStudentById = async ({ id }) => {
    const sql = `SELSCT  fullname,genner,age
                 FROM Student
                 WHERE id = ? ;`
    const data = await db.queryOne(sql, [id]);
}
module.exports = {getStudentById}