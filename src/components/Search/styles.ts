import styled from "styled-components";


export const SearchContainer = styled.article`
    width: 100%;
    max-width:90rem;
    margin-bottom:3rem ;
    margin: 0 auto;
`

export const SearchHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    margin-bottom: 0.75rem;

    > h1 {
        font-weight: 700;
        font-size: 1.125rem;
        color: ${({ theme }) => theme.colors.subtitle};
    } 

    > span {
        color: ${({ theme }) => theme.colors.span};
        font: 400 0.875rem Nunito;
    }
`

export const InputStyle = styled.input`
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1rem;

    background-color: ${({ theme }) => theme.colors.input};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.text};

    ::placeholder{
        color: ${({ theme }) => theme.colors.label};
    }

    :hover,:focus{
        outline: 1px solid ${({ theme }) => theme.colors.blue};
    }
`

