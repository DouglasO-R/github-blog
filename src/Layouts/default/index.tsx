import { Outlet } from "react-router-dom";

import { Content, Header } from "./styles";
import backgroundImg from "./assets/cover.png";
import logoImg from "./assets/logo.svg";


export function DefaultLayout() {
    return (
        <>
            <Header>
                <img src={backgroundImg} />

                <span>
                    <img src={logoImg} />
                </span>
            </Header>

            <Content>
                <Outlet />
            </Content>
        </>
    )
}