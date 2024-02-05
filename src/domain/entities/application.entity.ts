import { CustomError } from "../errors/custom.error";

export class ApplicationEntity {

  constructor(
    public id: number,
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
    public course_requirements: true,
    public status: string,
  ){}


  static fromObject(object: { [key: string]: any }){
    const {
      id,
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
      course_requirements,
      status,
    } = object;

    if(!id) throw CustomError.badRequest('Missing id')
    if(!email) throw CustomError.badRequest('Missing email')
    if(!first_name) throw CustomError.badRequest('Missing first_name')
    if(!last_name) throw CustomError.badRequest('Missing last_name')
    if(!street) throw CustomError.badRequest('Missing street')
    if(!street_number) throw CustomError.badRequest('Missing street_number')
    if(!postal_code) throw CustomError.badRequest('Missing postal_code')
    if(!city) throw CustomError.badRequest('Missing city')
    if(!state) throw CustomError.badRequest('Missing state')
    if(!motivation) throw CustomError.badRequest('Missing motivation')
    if(!programming_experience) throw CustomError.badRequest('Missing programming_experience')
    if(!country_id) throw CustomError.badRequest('Missing country_id')
    if(!studies_applicant) throw CustomError.badRequest('Missing studies_applicant')
    if(!channel) throw CustomError.badRequest('Missing channel')
    if(course_requirements === undefined) throw CustomError.badRequest('Missing course_requirements')
    if(!status) throw CustomError.badRequest('Missing status')

    return new ApplicationEntity(
        id,
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
        course_requirements,
        status,
    )
  }
}