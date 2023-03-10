import { User } from "../../../domain/user";
import { UserQuerier } from "../querier/user-querier";

const querier = new UserQuerier();

export const findUserById = (id: number): Promise<User> => {
  return querier.findUserById(id);
};
