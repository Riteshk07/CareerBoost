import  Jwt  from "jsonwebtoken";
import UserModel from "../models/User.js";

var checkUserAuth = async (req,res,next)=>{
    // 
    let token 
    const{authorization} = req.headers;
    if(authorization && authorization.startsWith("Bearer")){
        try {
            // Get token from header
            token = authorization.split(' ')[1];
            // console.log("token: ",token);
            // console.log("Autorization:",authorization);

            // Verify Token
            const {userID} = Jwt.verify(token, process.env.JWT_SECRET_KEY);
            
            // Get user from token
            req.user = await UserModel.findById(userID).select('-password')
            next()


        } catch (error) {
            console.log(error);
            res.status(401).send({"status":"failed", "message": "Unauthorized User"})
        }
    }
    if(!token){
        res.status(401).send({"status":"failed", "message": "Unauthorized User, Token not found"})
    }
}

export default checkUserAuth;