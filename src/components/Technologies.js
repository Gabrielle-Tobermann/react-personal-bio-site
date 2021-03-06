import React from 'react';
import Typist from 'react-typist';
import { TechContainer, TechText, TechTitle } from '../styles/TechStyle';

export default function Technologies() {
  return (
    <div style={{ height: 'calc(92vh - 40px)' }}>
    <Typist cursor={{ show: false }}>
    <TechTitle>TECHNOLOGIES</TechTitle>
    </Typist>
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
          <TechText>SASS</TechText>
          <i className="fab fa-sass fa-7x"></i>
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
          <img style={{ width: '112px', height: '112px' }} src="https://user-images.githubusercontent.com/76187279/119756064-9758fd80-be68-11eb-8096-f62b3085fc08.png"/>
        </div>
        <div>
          <TechText>REACT</TechText>
          <i className="fab fa-react fa-7x"></i>
        </div>
        <div>
          <TechText>FIREBASE</TechText>
          <img style={{ width: '112px', height: '112px' }} src="https://user-images.githubusercontent.com/76187279/119869284-a8941f80-bee5-11eb-8586-87d660c50c0a.png"/>
        </div>
        <div>
        <TechText>POSTMAN</TechText>
          <img style={{ width: '112px', height: '112px' }} src="https://user-images.githubusercontent.com/76187279/120837264-1c5caa80-c52c-11eb-8f80-1243285d3cb3.png"/>
        </div>
    </TechContainer>
    </div>
  );
}
