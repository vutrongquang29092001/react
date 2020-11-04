const StudentServices = require('../services/Student')

const getStudentById = async (req,res) => {
    const {id} = res.params;
    const {data,metadata} = await StudentServices.getStudentById(id)
    res.send({
        status: 1,
        data,
        metadata
    })
}
module.exports = {getStudentById}