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

const InsideCard = styled.div`
  border-radius: 20px;
`;

const ProjectsView = styled.div`
  height: 92vh;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 8%;
`;

export {
  ProjectCard, CardImage, ProjectsView, InsideCard
};
