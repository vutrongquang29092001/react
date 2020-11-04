const db = require('../utils/db')

const getAllClass = async ({limit , offset}) => {
    const sql = `SELECT id , className 
                 FROM class
                 WHERE isDelete = 0
                 limit ?
                 offset ? ;`
  const data =  await db.queryMulti(spl,[limit,offset]);
}
module.exports = {getAllClass}

