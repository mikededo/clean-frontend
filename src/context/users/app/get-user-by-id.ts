import { UserRepository } from "../domain/repositories";
import { User } from "../domain/user";

export class GetUserById {
  constructor(private readonly repository: UserRepository) {}

  public run(id: number): Promise<User> {
    return this.repository.findUserById(id);
  }
}
