import styled from 'styled-components';

const AboutMe = styled.div`
  color: #fa766a;
  text-align: left;
  padding-top: 3%;
  font-size: 35px;
  padding-bottom: 3%;
  width: fit-content;
  padding-left: 2%;
`;

const BioTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const BioView = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(92vh - 40px);
`;

const BioParagraph = styled.div`
  font-size: 24px;
  width: 50%;
`;

const BioPic = styled.img`
  width: 350px;
  height: auto;
  border-radius: 50%
`;
export {
  AboutMe, BioTitle, BioView, BioParagraph, BioPic
};
