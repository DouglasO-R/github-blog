import styled from "styled-components";


export const ProfileContainer = styled.main`
    width: 100%;
    max-width: 54rem;
    max-height: 13.25rem;
    margin: 0 auto;

    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.profile};
    padding: 2rem 2rem 2rem 2.5rem;

    > img {
        width: 9.25rem;
        height:9.25rem ;
    }

    display: flex;
    gap: 2rem;

    @media screen and (max-width:670px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        > img {
            width: 4.625rem;
            height:4.625rem ;
        }
    }

    @media screen and (max-width:670px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        > img {
            display: none;
        }
    }

`

export const ProfileContent = styled.section`
    width: 100%;
    margin-top: 0.5rem;
`

export const ProfileHeader = styled.header`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`

export const ProfileInfo = styled.article`
    margin-top: 0.5rem;
`

export const ProfileFooter = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    margin-top: 1.5rem;
    gap: 1.5rem;


    div {
        display: flex;
        gap: 0.5rem;
    }
`
