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
  color: #037780;
`;

const Header2 = styled.h2`
  font-size: 40px;
  font-family: 'Raleway', sans-serif;
  color: #fa766a;

`;

export { HomeComponent, Header1, Header2 };
