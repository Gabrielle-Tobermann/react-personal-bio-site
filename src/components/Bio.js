import React from 'react';
import Typist from 'react-typist';
import {
  AboutMe, BioTitle, BioView, BioParagraph, BioPic
} from '../styles/BioStyle';

export default function Bio() {
  return (
    <div className="whole-bio-view">
      <BioView>
          <Typist cursor={{ show: false }}>
            <AboutMe>ABOUT ME</AboutMe>
          </Typist>
        <BioTitle>
            <BioParagraph> I am  currently attending Nashville Software School in the full-stack developer program. A French native, I started out life as a musician, beginning classical training on the violin at a young age. Upon graduating high school in France, I decided to move to the United States to continue my violin studies at Middle Tennessee State University. While at MTSU, a friend introduced me to programming, and I began learning various aspects on my own. I find the world of programming to be very exciting and I look forward to many challenging projects to come.</BioParagraph>
          <BioPic src="https://user-images.githubusercontent.com/76187279/119419861-b026af00-bcc0-11eb-8e27-6b17ed4d5220.jpg"/>
          </BioTitle>
      </BioView>
    </div>
  );
}
