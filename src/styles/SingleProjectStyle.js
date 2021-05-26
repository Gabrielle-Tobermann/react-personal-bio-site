import styled from 'styled-components';

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoomVideo = styled.div`
  width: 35%;
  height: auto;
  align-self: center;
`;

const ProjectTitle = styled.h1`
  font-size: 40px;
  padding-top: 3%;
  padding-bottom: 1%;
`;

const ProjectText = styled.div`
  font-size: 20px;
  color: #700370;
  padding: 1%;
`;

const ProjectLink = styled.a`
  font-size: 20px;
  color: #700370;
  padding: 1%;
`;

const LinkTitle = styled.div`
  color: #700370;
  padding: 1% 0;
  font-style: italic
`;

const Tech = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #023c40;
  padding-top: 1%;
`;

export {
  LoomVideo, ProjectTitle, ProjectContainer, ProjectText, Tech, ProjectLink, LinkTitle
};
