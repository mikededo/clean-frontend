import { UserRepository } from "../../../domain/repositories";
import { User } from "../../../domain/user";

type JsonResponse = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  ip_address: string;
};

export class UserQuerier implements UserRepository {
  async findUserById(id: number): Promise<User> {
    const response = await fetch(`http://127.0.0.1:5000/users/${id}`);
    const data: JsonResponse = await response.json();

    return new User(
      data.id,
      data.first_name,
      data.last_name,
      data.email,
      data.ip_address
    );
  }
}
