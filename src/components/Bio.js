import React from 'react';

export default function Bio() {
  return (
    <div className="whole-bio-view">
      <div className="bio-view">
        <div className="bio-title">
          <div className="about-me">ABOUT ME</div>
            <p className="bio">I was born and raised in a small town in France. Being both French and
              American, I decided to move to the United States when I turned 18. I love
              music and grew up learning violin. So, upon my arrival in Tennessee, I
              attended Middle Tennessee State University and graduated with a Bachelor
              of music with an out-of-state violin scholarship. I discovered programming
              through a friend, during my time at MTSU. My interest in coding kept
              growing as I was learning more about it. I realized that being a musician
              and programmer was a perfect combination. Both fields are challenging,
              require constant learning, and are extremely rewarding. I am now attending
              Nashville Software School to become a full-stack software developer.</p>
          </div>
          <img className="bio-picture rounded-circle" src="https://user-images.githubusercontent.com/76187279/119419861-b026af00-bcc0-11eb-8e27-6b17ed4d5220.jpg"/>
      </div>
    </div>
  );
}
