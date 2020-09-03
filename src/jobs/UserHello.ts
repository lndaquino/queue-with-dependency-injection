import {UserData} from '../dtos/User'

export default {
  key: 'UserHello',
  async handle({data}: UserData) {
    const {user} = data;
    
    console.log(`Hello ${user.name}, welcome to background jobs using queue with dependency injection`)
  }
}