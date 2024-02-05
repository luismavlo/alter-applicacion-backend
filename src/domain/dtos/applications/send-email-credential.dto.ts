
export class SendEmailCredentialDto {

  private constructor(
    public  to: string,
    public  subject: string,
    public  emailToSend: string,
    public  password: string,
  ) {}

  static create( object: {[key: string]: any  } ): [string?, SendEmailCredentialDto?]{
    const {
      to,
      subject,
      emailToSend,
      password,
    } = object

    if(!to) return ['Missing to'];
    if(!subject) return ['Missing subject'];
    if(!emailToSend) return ['Missing emailToSend'];
    if(!password) return ['Missing password'];

    return [undefined, new SendEmailCredentialDto(
        to,
        subject,
        emailToSend,
        password,
    )];
  }

}