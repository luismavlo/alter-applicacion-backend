import { Request, Response } from "express";
import {CreateApplicationDto, CustomError, SendEmailCredentialDto} from "../../domain";
import {ApplicationService} from "../services/application.service";
import {EmailService} from "../services/email.service";
import {envs} from "../../config";

export class ApplicationController {
  constructor(
      public readonly applicationService: ApplicationService,
      public readonly emailService: EmailService
  ){}

  private handleError = ( error: unknown, res: Response ) => {
    console.log(error)
    if( error instanceof CustomError){
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: 'Internal Server Error'})
  }

  createApplication = (req: Request, res: Response ) => {
    const [ error, applicationDto ] = CreateApplicationDto.create(req.body);

    if( error ) return res.status(400).json({ error });

    this.applicationService.createApplication(applicationDto!)
        .then(application => res.status(201).json(application))
        .catch(error => this.handleError(error, res))
  }

  sendEmailUserWithCredentials = (req: Request, res: Response) => {
    const [ error, emailCredentialDto ] = SendEmailCredentialDto.create(req.body);
    if( error ) return res.status(400).json({ error });



    this.emailService.sendEmailWithSengrid({
      to: emailCredentialDto?.to!,
      subject: emailCredentialDto?.subject!,
      from: envs.SENDGRID_FROM_EMAIL,
      payloadData: {
        emailToSend: emailCredentialDto?.emailToSend!,
        password: emailCredentialDto?.password!
      }
    })
        .then((data) => res.status(200).json({ message: 'email was sent', }))
        .catch(error => this.handleError(error, res))
  }
}