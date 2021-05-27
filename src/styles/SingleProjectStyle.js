import styled from 'styled-components';

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const VidContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: #fa766a;
`;

const ProjectText = styled.div`
  font-size: 22px;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 2%;
`;

const ProjectLink = styled.a`
  font-size: 20px;
  padding: 1%;
  color: #037780;
`;

const LinkTitle = styled.div`
  color: black;
  padding: 1% 0;
`;

const Tech = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-top: 1%;
  width: 33.3%;
`;

const TechItems = styled.div`
  text-align: left;
  padding-left: 10%;
  color: #037780;
`;

export {
  LoomVideo, ProjectTitle, ProjectContainer, ProjectText, Tech, ProjectLink, LinkTitle, VidContainer, TechItems
};
