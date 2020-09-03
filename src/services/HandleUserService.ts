import {injectable, inject} from 'tsyringe';

import IUserHandleProvider from '../providers/UserHandleProvider/models/IUserHandleProvider'
import {Data} from '../dtos/User'

@injectable()
class HandleUserService {
  constructor(
    @inject('UserHandleProvider')
    private userHandleProvider: IUserHandleProvider,
  ){}

  public async run(user:Data) {
    await this.userHandleProvider.handleUser(user)
  }
}

export default HandleUserService