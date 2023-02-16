import { useEffect, useState } from "react";
import { Post } from "../model/Posts";
import { User } from "../model/User";

export function useGitHub() {
    const [user, setUser] = useState<User>({} as User);
    const [filter, setFilter] = useState("");
    const [posts, setPosts] = useState<Post[]>([]);

    const getUserProfile = async (username: string) => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUser(new User(data));
    }

    const HandleFilter = (filter: string) => {
        setFilter(filter)
    }

    console.log(filter);

    const getPosts = async (username: string) => {
        const response = await fetch(`https://api.github.com/search/issues?q=${filter}%20repo:${username}/reactjs-github-blog-challenge`)
        const data = await response.json();
        const posts = await data.items.map((item: any) => new Post({ user_login: item.user.login, ...item }))
        console.log(data);
        setPosts(posts);
    }

    useEffect(() => {
        getUserProfile("rocketseat-education");
    }, [])

    useEffect(() => {
        getPosts("rocketseat-education")

    }, [filter])

    return {
        user,
        HandleFilter,
        posts
    }
}