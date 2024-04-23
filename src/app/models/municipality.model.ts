export class municipality {
    id: string;
    department: string;
    name: string;

    constructor(data: any) {
        this.id = data.id;
        this.department = data.name;
        this.name = data.lastName;
    }
}
