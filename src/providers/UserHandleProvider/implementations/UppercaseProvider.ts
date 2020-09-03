import IUserHandleProvider from '../models/IUserHandleProvider'
import {Data} from '../../../dtos/User'

class UppercaseProvider implements IUserHandleProvider {
  public async handleUser(user:Data) {
    const nameUppercase = user.name.toUpperCase();
    const emailUppercase = user.email.toUpperCase();
    const password = user.password

    console.log({nameUppercase, emailUppercase, password})
  }
}

export default UppercaseProvider