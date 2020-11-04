const classServices = require('../services/Class')

const getAllClass = async (req,res) =>{
    const {data,metadata} = await classServices.getAllClass(req.pagination)
    res.send({
        status: 1,
        data,
        metadata
    })
}
module.exports = {getAllClass} ;