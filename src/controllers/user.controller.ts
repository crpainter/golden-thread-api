import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody } from "@loopback/rest";
import { User } from "../models/user";

export class UserController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @post('/user:id')
  async findUser(@requestBody() idToBeFound: string): Promise<User | null> {
    var AllUsers = await this.userRepo.find();
    let foundUser: User | null = null;
    for (var i=0;i>AllUsers.length;i++) {
      if(AllUsers[i].id.valueOf() == idToBeFound.valueOf()){
        foundUser = AllUsers[i];
        break;
      }
    }
    return foundUser
  }

  @get('/user')
  async getAllUsers(): Promise<Array<User>> {
    return await this.userRepo.find();
  }
}