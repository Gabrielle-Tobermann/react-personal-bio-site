import React from 'react';
import {
  Info, InfoContainer, WholeContainer, IconContainer, Title
} from '../styles/ContactStyle';

export default function Contact() {
  return (
    <div>
       <Title>CONTACT ME</Title>
       <WholeContainer>
        <IconContainer>
          <i className="fas fa-envelope fa-5x"></i>
          <i className="fab fa-linkedin fa-5x"></i>
          <i className="fab fa-github fa-5x"></i>
        </IconContainer>
        <InfoContainer>
          <Info>gabrielle.tobermann@gmail.com</Info>
          <Info>https://www.linkedin.com/in/gabrielle-tobermann-347878153/</Info>
          <Info>https://github.com/Gabrielle-Tobermann</Info>
        </InfoContainer>
       </WholeContainer>
    </div>
  );
}
