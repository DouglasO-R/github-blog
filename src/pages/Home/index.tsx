import { List } from "../../components/List";
import { Profile } from "../../components/Profile";
import { Search } from "../../components/Search";
import { useGitHub } from "../../hooks/useGitHub";

import { HomeContainer } from "./styles";



export function Home() {
    const { user, posts, HandleFilter } = useGitHub();

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