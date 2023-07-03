import { RoleModel } from './RoleModel';

export class UserModel {
  constructor(
    public id: number,
    public username: String,
    public password: String,
    public isEnabled: boolean,
    public roles: RoleModel[]
  ) {}
}
