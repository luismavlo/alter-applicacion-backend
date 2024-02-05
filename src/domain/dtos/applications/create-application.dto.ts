
export class CreateApplicationDto {

  private constructor(
      public email: string,
      public first_name: string,
      public last_name: string,
      public street: string,
      public street_number: string,
      public postal_code: string,
      public city: string,
      public state: string,
      public motivation: string,
      public programming_experience: string,
      public country_id: string,
      public studies_applicant: string,
      public channel: string,
  ){}

  static create( object: {[key: string]: any}): [string?, CreateApplicationDto?] {
    const {
      email,
      first_name,
      last_name,
      street,
      street_number,
      postal_code,
      city,
      state,
      motivation,
      programming_experience,
      country_id,
      studies_applicant,
      channel,
    } = object;

    if(!email) return ['Missing email'];
    if(!first_name) return ['Missing first_name'];
    if(!last_name) return ['Missing last_name'];
    if(!street) return ['Missing street'];
    if(!street_number) return ['Missing street_number'];
    if(!postal_code) return ['Missing postal_code'];
    if(!city) return ['Missing city'];
    if(!state) return ['Missing state'];
    if(!motivation) return ['Missing motivation'];
    if(!programming_experience) return ['Missing programming_experience'];
    if(!country_id) return ['Missing country_id'];
    if(!studies_applicant) return ['Missing studies_applicant'];
    if(!channel) return ['Missing channel'];

    return [undefined, new CreateApplicationDto(
        email,
        first_name,
        last_name,
        street,
        street_number,
        postal_code,
        city,
        state,
        motivation,
        programming_experience,
        country_id,
        studies_applicant,
        channel,
    )];
  }

}