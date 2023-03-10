import { Email, FirstName, Id, IpAddress, LastName } from "./value-objects";

export class User {
  constructor(
    public readonly id: Id,
    public readonly firstName: FirstName,
    public readonly lastName: LastName,
    public readonly email: Email,
    public readonly ipAddress: IpAddress
  ) {}
}
