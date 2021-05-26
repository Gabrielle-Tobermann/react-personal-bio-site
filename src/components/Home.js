import React from 'react';
import Typist from 'react-typist';
import TextLoop from 'react-text-loop';
import { HomeComponent, Header1, Header2 } from '../styles/HomeStyle';

export default function Home() {
  return (
    <HomeComponent>
      <div style={{ width: '100%' }}>
      <Typist cursor={{ show: false }}>
        <Header1 style={{ fontSize: '80px' }}>Gabrielle Tobermann</Header1>
      </Typist>
      <img src={'https://user-images.githubusercontent.com/76187279/119210193-a73f9e80-ba70-11eb-8819-9ece96e17cf9.png'} className='violin-image'/>
      <div>
      <TextLoop>
        <Header2>Full Stack Developer</Header2>
        <Header2>Violinist</Header2>
        <Header2>Plant Enthusiast</Header2>
      </TextLoop>
      </div>
      </div>
    </HomeComponent>
  );
}
