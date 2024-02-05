import { envs, httpClient } from "../../config";
import { CustomError } from "../../domain";

export interface SendMailOptions {
  to: string | string[];
  subject: string;
  payloadData: {
    emailToSend: string,
    password: string
  };
  from: string
}
export class EmailService {


  async sendEmailWithSengrid(options: SendMailOptions){
      const { to, subject, payloadData, from } = options;

      const payload = {
        personalizations: [
          {
            to: [ { email: to } ],
            subject: subject,
            dynamic_template_data: {
              email: `${payloadData.emailToSend}`,
              password: `${payloadData.password}`
            },
          },
        ],
        from: {
          email: envs.SENDGRID_FROM_EMAIL,
        },
        template_id: envs.SENDGRID_REMINDER_EMAIL_TEMPLATE,
      };


      try {
        return await httpClient.post('https://api.sendgrid.com/v3/mail/send', payload, envs.SENDGRID_API_KEY);
      } catch (error) {
        console.log(error)
        throw CustomError.internalServer(`${ error }`)
      }
  }



}