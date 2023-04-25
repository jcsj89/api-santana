import { v4 } from 'uuid';

interface IUser {
  id?: string;
  name: string;
  email: string;
  password_hash: string;
  isActive?: boolean;
  isAdmin?: boolean;
}

class User {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  isActive: boolean;
  isAdmin: boolean;

  constructor({
    id = v4(),
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

  // this function parse User to JSON format
  static toJSON(user: User) {
    return JSON.stringify(user);
  }

  // parse User to object data
  static toData(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password_hash: user.password_hash,
      isActive: user.isActive,
      isAdmin: user.isAdmin,
    };
  }
}

export default User;
