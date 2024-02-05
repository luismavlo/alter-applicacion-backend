import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  NODE_ENV: get('NODE_ENV').required().asString(),


  SENDGRID_FROM_EMAIL: get('SENDGRID_FROM_EMAIL').required().asString(),
  SENDGRID_REMINDER_EMAIL_TEMPLATE: get('SENDGRID_REMINDER_EMAIL_TEMPLATE').required().asString(),
  SENDGRID_API_KEY: get('SENDGRID_API_KEY').required().asString(),
}



