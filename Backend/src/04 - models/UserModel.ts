import RoleModel from "./roleModel";

class UserModel {
  id: number;
  first_name: string;
  last_name: string;
  user_name: string;
  password: string;
  role: RoleModel;

  public constructor(user: UserModel) {
    this.id = user.id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.user_name = user.user_name;
    this.password = user.password;
    this.role = user.role;
  }
}

export default UserModel;
