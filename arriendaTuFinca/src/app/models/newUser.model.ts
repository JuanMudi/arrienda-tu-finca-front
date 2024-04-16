export class newUser {
    name: string;
    lastName: string;
    email: string;
    phoneNumber: string | null;
    password: string;
    

    constructor(data: any) {
        this.name = data.name;
        this.lastName = data.lastName;
        this.phoneNumber = data.phoneNumber;
        this.email = data.email;
        this.password = data.password;

    }
}
