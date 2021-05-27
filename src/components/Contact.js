import React, { useState } from 'react';
import Typist from 'react-typist';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip } from 'reactstrap';
import {
  Info, InfoContainer, WholeContainer, IconContainer, Title
} from '../styles/ContactStyle';

export default function Contact() {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
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
          <span>
            <CopyToClipboard text="gabrielle.tobermann@gmail.com">
            <Info href="#" id="GabEmail">gabrielle.tobermann@gmail.com</Info>
            </CopyToClipboard>
          </span>
          <Tooltip placement="top" isOpen={tooltipOpen} target="GabEmail" toggle={toggle}>Copy</Tooltip>
          <Info href="https://www.linkedin.com/in/gabrielle-tobermann-347878153/">https://www.linkedin.com/in/gabrielle-tobermann-347878153/</Info>
          <Info href="https://github.com/Gabrielle-Tobermann">https://github.com/Gabrielle-Tobermann</Info>
        </InfoContainer>
       </WholeContainer>
    </div>
  );
}
