const jwt = require("jsonwebtoken");
const userSchema = require('../models/userSchema');

const isAuth = async(req,res,next)=>{
    try {
    let token =await  req.headers['x-auth-token']; 
    // if (!token) return res.status(404).send({ msg: "No Token Provided" });
    const decodedtoken = await jwt.verify(token,process.env.SECRET_TOKEN)
    const id = decodedtoken.userId
    const user = await userSchema.findById(id)
} catch (e) {
    res.status(400).send({message:e.message})
}
user = req.user
next()
}
module.exports = isAuth