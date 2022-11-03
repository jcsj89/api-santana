interface IUserRole {
  id: string;
  user_id: string;
  role_id: string;
}

class UserRole {
  id: string;
  user_id: string;
  role_id: string;

  constructor({ id, user_id, role_id }: IUserRole) {
    this.id = id;
    this.user_id = user_id;
    this.role_id = role_id;
  }
}

export default UserRole;
