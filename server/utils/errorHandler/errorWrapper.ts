import { Request, Response, NextFunction, RequestHandler} from "express";

const errorMappings: { [name: string]: number } ={
  JsonWebTokenError: 401,
  Unauthorized: 401,
  ValidationError: 422,
  "NotFound": 404
};

const errorWrapper = async(controller: RequestHandler,req:Request, res:Response, next:NextFunction) =>{
  try {
    await controller(req,res,next)
  }
  catch (error:any) {
    const status = errorMappings[error.name];
    error.status = status
    next(error)
  }
}
export default errorWrapper ;