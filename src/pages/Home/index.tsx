import { List } from "../../components/List";
import { Profile } from "../../components/Profile";
import { Search } from "../../components/Search";
import { useDataFetchGitHub } from "../../hooks/useDataFetchGitHub";

import { HomeContainer } from "./styles";



export function Home() {
    const { user, posts, HandleFilter, quantityPosts } = useDataFetchGitHub();

    return (
        <HomeContainer>
            <header className="header">
                <Profile user={user} />
            </header>

            <main className="content">
                <Search onSearch={HandleFilter} quantityPosts={quantityPosts} />
                <List posts={posts} />
            </main >

        </HomeContainer>
    )
}