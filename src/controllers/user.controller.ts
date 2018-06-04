import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody } from "@loopback/rest";
import { User } from "../models/user";

export class UserController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @get('/user/:id')
  async findUser(@requestBody() idToBeFound: number): Promise<User | null> {
    var AllUsers = await this.userRepo.find();
    let foundUser: User | null = null;
    for (var i=0;i<AllUsers.length;i++) {
      var idtocompare = AllUsers[i].id;
      if(idtocompare == idToBeFound){
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