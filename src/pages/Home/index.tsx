import { useEffect, useState } from "react";
import { List } from "../../components/List";
import { Profile } from "../../components/Profile";
import { Search } from "../../components/Search";
import { User } from "../../model/User";
import { HomeContainer } from "./styles";








export function Home() {
    const [user, setUser] = useState<User>({} as User);


    const getUserProfile = async (username: string) => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUser(new User(data));
    }



    useEffect(() => {
        getUserProfile("douglaso-r");
    }, [])



    return (
        <HomeContainer>
            <header className="header">
                <Profile user={user} />
            </header>

            <main className="content">
                <Search />
                <List />
            </main >

        </HomeContainer>
    )
}