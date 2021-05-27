import styled from 'styled-components';

const AboutMe = styled.div`
  color: #e24f47;
  text-align: left;
  font-size: 35px;
  padding-top: 3%;
  padding-bottom: 3%;
  width: fit-content;
`;

const BioTitle = styled.div`
  width: 55%;
  height: 100%;
`;

const BioView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const BioParagraph = styled.div`
  font-size: 24px;
  padding-top: 10%;
`;

const BioPic = styled.img`
  width: 350px;
  height: auto;
  border-radius: 50%;
`;
export {
  AboutMe, BioTitle, BioView, BioParagraph, BioPic
};
