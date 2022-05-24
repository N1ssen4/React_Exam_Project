export class User {
    email: string;
    userName?: string;
    photoUrl?: string

    constructor(email: string, userName?: string, photoUrl?: string) {
        this.email = email;
        this.userName = userName;
        this.photoUrl = photoUrl;
    }
}