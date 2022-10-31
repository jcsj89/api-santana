
class User {
    id;
    name;
    email;
    password_hash;
    isActive;
    isAdmin;

    constructor({
        id,
        name,
        email,
        password_hash,
        isActive = true,
        isAdmin = false,
    }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password_hash = password_hash;
        this.isActive = isActive;
        this.isAdmin = isAdmin;
    }
}

export default User;
