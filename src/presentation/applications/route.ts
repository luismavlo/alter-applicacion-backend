import { Router } from 'express';
import { ApplicationController } from "./controller";
import {ApplicationService} from "../services/application.service";
import {EmailService} from "../services/email.service";


export class ApplicationRoutes {


  static get routes(): Router {

    const router = Router();
    const applicationService = new ApplicationService()
    const emailService = new EmailService();
    const controller = new ApplicationController(applicationService, emailService)

    router.route('/')
        .post(controller.createApplication)

    router.post('/send-credentials', controller.sendEmailUserWithCredentials)

    return router;
  }


}

