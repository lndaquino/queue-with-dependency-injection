import {container} from 'tsyringe'
import {UserData} from '../dtos/User'
import HandleUserService from '../services/HandleUserService';

export default {
  key: 'ManipulateUser',
  async handle({data}: UserData) {
    const {user} = data;
    const handleUserService = container.resolve(HandleUserService)
    await handleUserService.run(user);
  }
}