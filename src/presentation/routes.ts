import { ApplicationRoutes } from './applications/route';
import { Router } from 'express';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    router.use('/api/application', ApplicationRoutes.routes );


    return router;
  }


}

