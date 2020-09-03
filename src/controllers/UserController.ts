import {Request, Response} from 'express'
import Queue from '../lib/Queue';

export default {
  async store(request: Request, response:Response) {
    const {name, email, password} = request.body

    const user = {
      name, email, password,
    }

    await Queue.add('ManipulateUser',{user});

    await Queue.add('UserHello',{user});

    return response.json(user);
  }
}