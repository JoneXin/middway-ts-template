import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import {User} from '../entity/mysql/user'
@Provide()
export class UserService {

  async getUser(options: IUserOptions): Promise<Array<User>> {
    return await User.findAll({});
  }
}
