import { Authentication, AuthenticationModel } from '../../../domain/usecases/authentication'
import { LoadAccountByEmailRepository } from '../../protocols/load-account-by-email-repository'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository

  constructor(loadAccountByEmailRepository: LoadAccountByEmailRepository) {
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
  }

  async auth(authenticationModel: AuthenticationModel): Promise<string> {
    await this.loadAccountByEmailRepository.load(authenticationModel.email)
    return null
  }
}
