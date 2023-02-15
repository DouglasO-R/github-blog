import { useEffect, useState } from "react";

import { List } from "../../components/List";
import { Profile } from "../../components/Profile";
import { Search } from "../../components/Search";

import { Post } from "../../model/Posts";
import { User } from "../../model/User";

import { HomeContainer } from "./styles";





export function Home() {
    const [user, setUser] = useState<User>({} as User);
    const [posts, setPosts] = useState<Post[]>([]);

    const [filter, setFilter] = useState("");

    const getUserProfile = async (username: string) => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUser(new User(data));
    }

    const getPosts = async (username: string) => {
        const response = await fetch(`https://api.github.com/search/issues?q=${filter}%20repo:${username}/reactjs-github-blog-challenge`)
        const data = await response.json();
        const posts = await data.items.map((item: any) => new Post({ user_login: item.user.login, ...item }))
        console.log(data);
        setPosts(posts);
    }

    useEffect(() => {
        getUserProfile("rocketseat-education");
        getPosts("rocketseat-education")
    }, [filter])

    const HandleFilter = (filter: string) => {
        setFilter(filter)
    }



    return (
        <HomeContainer>
            <header className="header">
                <Profile user={user} />
            </header>

            <main className="content">
                <Search onSearch={HandleFilter} />
                <List posts={posts} />
            </main >

        </HomeContainer>
    )
}