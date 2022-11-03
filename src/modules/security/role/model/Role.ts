interface IRole {
  id: string;
  role: string;
  action: string;
  endpoint: string;
  description: string;
}

class Role {
  id: string;
  role: string;
  action: string;
  endpoint: string;
  description: string;

  constructor({ id, role, action, endpoint, description }: IRole) {
    this.id = id;
    this.role = role;
    this.action = action;
    this.endpoint = endpoint;
    this.description = description;
  }
}

export default Role;
