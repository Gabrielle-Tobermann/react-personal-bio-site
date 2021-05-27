import React from 'react';
import Typist from 'react-typist';
import {
  AboutMe, BioTitle, BioView, BioParagraph, BioPic
} from '../styles/BioStyle';

export default function Bio() {
  return (
    <div className="whole-bio-view">
      <BioView>
        <BioTitle>
          <Typist cursor={{ show: false }}>
            <AboutMe>ABOUT ME</AboutMe>
          </Typist>
            <BioParagraph>I was born and raised in a small town in France. Being both French and
              American, I decided to move to the United States when I turned 18. I love
              music and grew up learning violin. So, upon my arrival in Tennessee, I
              attended Middle Tennessee State University and graduated with a Bachelor
              of music with an out-of-state violin scholarship. I discovered programming
              through a friend, during my time at MTSU. My interest in coding kept
              growing as I was learning more about it. I realized that being a musician
              and programmer was a perfect combination. Both fields are challenging,
              require constant learning, and are extremely rewarding. I am now attending
              Nashville Software School to become a full-stack software developer.</BioParagraph>
          </BioTitle>
          <BioPic src="https://user-images.githubusercontent.com/76187279/119419861-b026af00-bcc0-11eb-8e27-6b17ed4d5220.jpg"/>
      </BioView>
    </div>
  );
}
