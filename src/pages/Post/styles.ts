import styled from "styled-components";


export const PostContainer = styled.main`
     .header {
        margin-top: calc(208px - 296px);
        margin-bottom: 4.5rem;
    }
`
export const PostInfo = styled.section`
    width: 100%;
    max-width: 54rem;
    padding: 2rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.colors.profile};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    margin-top: calc(208px - 296px);//change

`

export const PostHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    margin-bottom: 1.25rem;
`

export const PostTitle = styled.h1`
    font: 700 1.5rem Nunito;
    line-height: 31.2px;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.title};
`

export const PostFooter = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    margin-top: 1.5rem;
    gap: 1.5rem;


    div {
        display: flex;
        gap: 0.5rem;
        color: ${({ theme }) => theme.colors.span};
    }
`

export const PostContent = styled.section`
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;
    padding: 2.5rem 2rem;

    p {
      margin-block: .5rem;
    }

    strong {
      color: ${({ theme }) => theme.colors.subtitle};
    }

    h2 {
      margin-block: 2.5rem 1.5rem;
    }

    h3 {
      margin-block: 1.5rem 1rem;
    }

    a {
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: none;
      
      :hover {
        text-decoration: underline;
      }
    }

    ul {
      margin-block: 1rem;
      list-style-position: inside;

      li + li {
        margin-top: .5rem;
      }
    }

    img {
      width: 100%;
      margin-block: 1rem;
  }
`