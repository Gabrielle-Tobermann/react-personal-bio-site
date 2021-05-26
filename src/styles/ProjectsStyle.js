import styled from 'styled-components';

const ProjectCard = styled.div`
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 20px;
  background-color: transparent;
`;

const CardImage = styled.img`
  width: 360px;
  height: 210px;
  border-radius: 20px;
  background-color: transparent;
`;

const HoverText = styled.p`
  color: black;
  font-size: 22px;
  font-weight: bold;
  position:relative;
  bottom: 105px;
  left:0px;
  visibility: hidden;
`;

const InsideCard = styled.div`
  border-radius: 20px;
  &:hover {
    ${CardImage} {
      opacity: 0.3;
    }
    ${HoverText} {
      visibility: visible;
    }
  }
`;

const ProjectsView = styled.div`
  height: 92vh;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 8%;
`;

export {
  ProjectCard, CardImage, ProjectsView, InsideCard, HoverText
};
