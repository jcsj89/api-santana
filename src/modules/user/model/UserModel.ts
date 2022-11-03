interface IUser {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  isActive: boolean;
  isAdmin: boolean;
}

class User {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  isActive: boolean;
  isAdmin: boolean;

  constructor({
    id,
    name,
    email,
    password_hash,
    isActive = true,
    isAdmin = false,
  }: IUser) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password_hash = password_hash;
    this.isActive = isActive;
    this.isAdmin = isAdmin;
  }
}

export default User;
