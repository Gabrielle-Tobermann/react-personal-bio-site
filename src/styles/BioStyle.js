import styled from 'styled-components';

const AboutMe = styled.div`
  color: #037780;
  text-align: left;
  font-size: 35px;
  padding-left: 2%;
  padding-top: 4%;
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
  margin-left: 2.5%;
  margin-right: 2.5%;
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
