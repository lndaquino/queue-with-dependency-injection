import {container} from 'tsyringe'
import userHandlerConfig from '../../config/userHandler'

import IUserHandleProvider from './models/IUserHandleProvider'
import UppercaseProvider from './implementations/UppercaseProvider'
import LowercaseProvider from './implementations/LowercaseProvider'

const providers = {
  uppercase: container.resolve(UppercaseProvider),
  lowercase: container.resolve(LowercaseProvider),
}

container.registerInstance<IUserHandleProvider>('UserHandleProvider', providers[userHandlerConfig.driver])