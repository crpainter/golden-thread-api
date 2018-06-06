import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, param } from "@loopback/rest";
import { User } from "../models/user";

export class UserController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @get('/user/{id}')
  async findUser(@param.path.number('id') idToBeFound: number): Promise<User | null> {
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

  @get('/users/{user_id}/donations')
  async getDonationsByUserId(
    @param.path.number('user_id') userId: number,
    @param.query.date('date_from') dateFrom: Date
  ) {
    console.log(userId);
    console.log(dateFrom)
  }

  @get('/user')
  async getAllUsers(): Promise<Array<User>> {
    return await this.userRepo.find();
  }
}