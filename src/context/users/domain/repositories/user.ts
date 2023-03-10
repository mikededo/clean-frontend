import { Id } from "../value-objects";
import { User } from "../user";

export interface UserRepository {
  findUserById(id: Id): Promise<User>;
}
