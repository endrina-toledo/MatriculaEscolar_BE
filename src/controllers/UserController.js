const db = require('../models')
const UserModel = db.rest.models.user

exports.getUser = async(req,res)=>{
    res.send({message:'hola'})
}

