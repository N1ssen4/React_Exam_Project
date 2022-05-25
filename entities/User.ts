export class User {
    email: string;
    userName?: string;
    profilePicture?: string

    constructor(email: string, userName?: string, profilePicture?: string) {
        this.email = email;
        this.userName = userName;
        this.profilePicture = profilePicture;
    }
}