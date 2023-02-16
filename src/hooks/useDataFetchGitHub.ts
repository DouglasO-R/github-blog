import { useEffect, useState } from "react";
import { Post } from "../model/Posts";
import { User } from "../model/User";

export function useDataFetchGitHub(postId?: any) {
    const [user, setUser] = useState<User>({} as User);
    const [filter, setFilter] = useState("");

    const [posts, setPosts] = useState<Post[]>([]);
    const [issue, setIssue] = useState<Post>({} as Post);



    const getUserProfile = async (username: string) => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUser(new User(data));
    }

    const HandleFilter = (filter: string) => {
        setFilter(filter)
    }

    const getPosts = async (username: string) => {
        const url = filter.length > 0
            ? `https://api.github.com/search/issues?q=${filter}%20repo:${username}/reactjs-github-blog-challenge`
            : `https://api.github.com/search/issues?q=%20repo:${username}/reactjs-github-blog-challenge`;


        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
        const posts = await data.items.map((item: any) => new Post({ user_login: item.user.login, ...item }))
        setPosts(posts);
    }


    const getPost = async () => {
        const response = await fetch(`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${postId}`);
        const data = await response.json();
        setIssue(new Post({ user_login: data.user.login, ...data }));
    }



    useEffect(() => {
        getUserProfile("rocketseat-education");
    }, [])

    useEffect(() => {
        getPosts("rocketseat-education")

    }, [filter])

    useEffect(() => {
        postId && getPost();
    }, [postId]);

    const quantityPosts = posts.length
    return {
        user,
        HandleFilter,
        posts,
        issue,
        quantityPosts
    }
}