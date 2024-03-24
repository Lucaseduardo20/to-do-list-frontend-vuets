export default interface Credentials {
    email: string,
    password: string
}

export class User {
    public name: string;
    public email: string;
    public password: string;

    constructor(name: string , user: string, password: string) {
        this.name = name
        this.email = user;
        this.password = password;
    }
}