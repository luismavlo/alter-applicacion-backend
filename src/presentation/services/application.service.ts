import {ApplicationEntity, CreateApplicationDto, CustomError} from "../../domain";
import { prisma } from "../../data/database/postgres-database";


export class ApplicationService {

  constructor() {}

  public async createApplication( createApplicationDto: CreateApplicationDto ){

    try {
      const application = await prisma.application.create({
        data: createApplicationDto as any
      })

      return ApplicationEntity.fromObject(application)
    } catch (error){
      throw CustomError.internalServer(`${ error }`)
    }


  }

}