import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};

    }

    body,input,textarea,button{
        font:400 1rem Nunito,sans-serif ;
    }

    h1, h2, h3 {
        color: ${({ theme }) => theme.colors.title};
    }
`
