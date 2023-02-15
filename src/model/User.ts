export interface IUser {
    avatar_url: string;
    bio: string;
    company: string;
    following: number;
    html_url: string;
    name: string;
    login: string;
}

export class User {
    private user: IUser

    constructor(user: IUser) {
        this.user = user;
    }


    public get avatar(): string {
        return this.user.avatar_url;
    }

    public get bio(): string {
        return this.user.bio;
    }

    public get company(): string {
        return this.user.company;
    }

    public get following(): number {
        return this.user.following;
    }

    public get html_url(): string {
        return this.user.html_url;
    }

    public get name(): string {
        return this.user.name;
    }

    public get login(): string {
        return this.user.login;
    }

}