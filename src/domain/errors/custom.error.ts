import { envs } from './../../config/envs';



export class CustomError extends Error {

  constructor(
      public readonly message: string,
      public readonly statusCode: number,
  ) {
    super(message);
  }

  static badRequest(message: string){
    return new CustomError(message, 400);
  }

  static unAuthorize(message: string){
    return new CustomError(message, 401);
  }

  static forbidden(message: string){
    return new CustomError(message, 403);
  }

  static notFound(message: string){
    return new CustomError(message, 404);
  }

  static internalServer(message?: string){
    if(envs.NODE_ENV === 'development'){
      return new CustomError(message!, 500);
    }else if(envs.NODE_ENV === 'production'){
      return new CustomError('Internal Server Error', 500);
    }

  }


}