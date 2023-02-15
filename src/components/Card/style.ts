import styled from "styled-components"



export const CardLink = styled.a`
    text-decoration: none;
    background: ${({ theme }) => theme.colors.post};
    border: 1px solid ${({ theme }) => theme.colors.post};
    border-radius: 10px;
    color:  ${({ theme }) => theme.colors.text};
`

export const CardContainer = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.375rem;

    width: 26rem;
    height: 16.25rem;
    border-radius: 10px;
    padding: 1.875rem 2rem 2rem ;

    background-color: ${({ theme }) => theme.colors.post};
`

export const CardHeader = styled.header`
    display: flex;
    justify-content: space-between;

    > h1 {
        font: 700 1.25rem Nunito;
        color: ${({ theme }) => theme.colors.title};
    }

    > span {
        font: 400 0.875rem Nunito;
        color: ${({ theme }) => theme.colors.span};
    }


`

export const CardContent = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    > img {
        width: 150px;
        height: 150px;
}
`

