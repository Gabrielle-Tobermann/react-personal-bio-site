import React from 'react';
import { TechContainer, TechText } from '../styles/TechStyle';

export default function Technologies() {
  return (
    <TechContainer>
       <div>
          <TechText>HTML</TechText>
          <i className="fab fa-html5 fa-7x"></i>
        </div>
        <div>
          <TechText>JAVASCRIPT</TechText>
          <i className="fab fa-js fa-7x"></i>
        </div>
        <div>
          <TechText>GIT</TechText>
          <i className="fab fa-git-alt fa-7x"></i>
        </div>
        <div>
          <TechText>GITHUB</TechText>
          <i className="fab fa-github fa-7x"></i>
        </div>
        <div>
          <TechText>VS CODE</TechText>
          <img style={{ width: '70px', height: '70px' }} src="https://user-images.githubusercontent.com/76187279/119756064-9758fd80-be68-11eb-8096-f62b3085fc08.png"/>
        </div>
        <div>
          <TechText>REACT</TechText>
          <i className="fab fa-react fa-7x"></i>
        </div>
    </TechContainer>
  );
}
