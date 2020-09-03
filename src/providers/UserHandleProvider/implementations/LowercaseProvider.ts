import IUserHandleProvider from '../models/IUserHandleProvider'
import {Data} from '../../../dtos/User'

class LowercaseProvider implements IUserHandleProvider {
  public async handleUser(user:Data) {
    const nameLowercase = user.name.toLowerCase();
    const emailLowercase = user.email.toLowerCase();
    const password = user.password

    console.log({nameLowercase, emailLowercase, password})
  }
}

export default LowercaseProvider