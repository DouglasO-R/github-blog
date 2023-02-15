export interface IPost {
    html_url: string;
    title: string;
    user_login: string;
    comments: number;
    created_at: string;
    body: string,
    number: number
}

export class Post {
    private html_url: string;
    private title: string;
    private user_login: string;
    private comments: number;
    private created_at: string;
    private body: string
    private number: number


    constructor({ user_login, comments, created_at, html_url, title, body, number }: IPost) {
        this.html_url = html_url;
        this.title = title
        this.user_login = user_login
        this.comments = comments
        this.created_at = created_at
        this.body = body;
        this.number = number
    }


    public get Url(): string {
        return this.html_url
    }

    public get Title(): string {
        return this.title
    }

    public get Login(): string {
        return this.user_login
    }

    public get Comments(): number {
        return this.comments
    }

    public get CreatedAt(): string {
        return this.created_at
    }

    public get Data(): string {
        return this.body
    }

    public get Number(): number {
        return this.number
    }

}