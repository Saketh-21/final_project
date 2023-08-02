import jwt from "jsonwebtoken";

export const sendCookie=(user,res,message,statusCode=200)=>{ //call parameters as per the need in the body
  const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);   //_id exists in mongodb  secret key for signing is in env var keep the keyword same as JWT_SECRET

  res.status(statusCode).cookie("token",token,{
    httpOnly: true,
    maxAge: 15*60*1000,  //cookie same site by default is Lax
    sameSite:process.env.NODE_ENV === "Development" ? "lax" :"none",     //frontend and backend are on different urls so none
    secure:process.env.NODE_ENV === "Development" ? false : true,      //none samesite secure is true else cookie is blocked
  }).json({ //name and jwt token                       deployment time none and true local host lax and false
    success:true,
    message,
  })
}