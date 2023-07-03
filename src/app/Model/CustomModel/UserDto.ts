export class UserDto {
  constructor(
    public username: String,
    public password: String,
    public roleId: number
  ) {}
}
