import React from 'react';
import { HomeComponent, Header1, Header2 } from '../styles/HomeStyle';

export default function Home() {
  return (
    <HomeComponent>
      <Header1>GABRIELLE TOBERMANN</Header1>
      <img src={'https://user-images.githubusercontent.com/76187279/119210193-a73f9e80-ba70-11eb-8819-9ece96e17cf9.png'} className='violin-image'/>
      <Header2>Full Stack Developer</Header2>
    </HomeComponent>
  );
}
