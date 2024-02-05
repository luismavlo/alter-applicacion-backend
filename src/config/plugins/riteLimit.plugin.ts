import rateLimit from 'express-rate-limit';

export const limitRequest = (maxRequest: number, windowsMinutes: number, message: string) => {
  return rateLimit({
    max: maxRequest,
    windowMs: windowsMinutes * 60 * 1000,
    message: message
  })
}