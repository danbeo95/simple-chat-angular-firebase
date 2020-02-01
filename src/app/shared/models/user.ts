export class User {
    uid: string;
    email: string;

    constructor(uid: string, email: string) {
        this.email = email;
        this.uid = uid;
    }
    toDoc() {
        return JSON.parse(JSON.stringify(this));
    }
}
