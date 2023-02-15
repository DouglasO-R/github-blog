import styled from "styled-components";


export const LinkStyle = styled.a`    
    display: flex;
    align-items: center;

    gap: 0.5rem;
    height: 19px;
    text-decoration: none;

    color: ${({ theme }) => theme.colors.blue};
    border: 1px solid transparent;
    /* max-width: 4.875rem; */
    

    text-transform: uppercase;
    font-family: Nunito;
    font-weight: 700;
    font-size: 0.75rem;
    padding-bottom: 0.5rem;
    line-height: 160%;

    :hover{
        border-bottom:1px solid ${({ theme }) => theme.colors.blue};
    }    

    > svg {
        width: 12px;
        height: 12px;
    }
`
