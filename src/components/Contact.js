import React from 'react';
import Typist from 'react-typist';
import {
  Info, InfoContainer, WholeContainer, IconContainer, Title
} from '../styles/ContactStyle';

export default function Contact() {
  return (
    <div>
      <Typist cursor={{ show: false }}>
       <Title>CONTACT ME</Title>
      </Typist>
       <WholeContainer>
        <IconContainer>
          <i className="fas fa-envelope fa-5x"></i>
          <i className="fab fa-linkedin fa-5x"></i>
          <i className="fab fa-github fa-5x"></i>
        </IconContainer>
        <InfoContainer>
          <Info>gabrielle.tobermann@gmail.com</Info>
          <Info href="https://www.linkedin.com/in/gabrielle-tobermann-347878153/">https://www.linkedin.com/in/gabrielle-tobermann-347878153/</Info>
          <Info href="https://github.com/Gabrielle-Tobermann">https://github.com/Gabrielle-Tobermann</Info>
        </InfoContainer>
       </WholeContainer>
    </div>
  );
}
