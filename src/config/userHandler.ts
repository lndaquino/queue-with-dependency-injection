export interface IUserHandlerConfig {
  driver: 'uppercase' | 'lowercase';
}

export default {
  driver: process.env.USER_HANDLER || 'uppercase'
} as IUserHandlerConfig