import { List } from "../../components/List";
import { Profile } from "../../components/Profile";
import { Search } from "../../components/Search";
import { HomeContainer } from "./styles";



export function Home() {
    return (
        <HomeContainer>
            <header className="header">
                <Profile />
            </header>

            <main className="content">
                <Search />
                <List />
            </main >

        </HomeContainer>
    )
}