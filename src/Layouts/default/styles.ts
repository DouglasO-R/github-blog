import styled from 'styled-components';


export const Header = styled.header`
  width: 100%;
  position: relative;
  z-index: -1;
 

  > img {
    width: 100%;
    height: 18.5rem;
  } 

  span {
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Content = styled.main`
  max-width: 90rem;
  margin-inline: auto;
  padding-inline: 1rem;
`;