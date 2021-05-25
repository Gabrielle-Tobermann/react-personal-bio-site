import styled from 'styled-components';

const HomeComponent = styled.div`
display: flex; 
flex-direction: column;
align-items: center;
justify-content: center;
height: 92vh;
`;

const Header1 = styled.h1`
  font-size: 45px;
  font-family: 'Raleway', sans-serif;
  color: #4d194d;
`;

const Header2 = styled.h2`
  font-size: 38px;
  font-family: 'Raleway', sans-serif;
  color: #700370;
`;

export { HomeComponent, Header1, Header2 };
