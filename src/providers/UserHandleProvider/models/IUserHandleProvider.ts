import {Data} from '../../../dtos/User';

export default interface IUserHandleProvider {
  handleUser(user: Data):Promise<void>;
}