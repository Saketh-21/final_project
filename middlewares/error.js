class ErrorHandler extends Error {
  constructor(message,statusCode){
    super(message); //this message willreach to Error superclass
    this.statusCode = statusCode;
  };

}

export const errorMiddleware = (err,req,res,next)=>{  //for handling error of next anywhere

  err.message = err.message||"Internal Server Error"; //by def msg if nothing passed in error
  err.statusCode = err.statusCode||500; //internal server error
  res.status(err.statusCode).json({
    success:false,
    message:err.message,
  })
}

export default ErrorHandler;