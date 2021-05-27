import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProject } from '../helpers/data/projectsData';
import {
  LoomVideo, ProjectContainer, ProjectTitle, ProjectText, ProjectLink, LinkTitle, VidContainer, Tech, TechItems
} from '../styles/SingleProjectStyle';

function SingleProject() {
  const [projectObj, setProjectObj] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleProject(firebaseKey).then((resp) => {
      setProjectObj(resp);
    });
  }, []);

  return (
    <ProjectContainer>
      <ProjectTitle>{projectObj.title}</ProjectTitle>
      <ProjectText>{projectObj.description}</ProjectText>
      <VidContainer>
        <Tech>
          <LinkTitle>LINKS</LinkTitle>
          <div>
          <ProjectLink href={projectObj.githubUrl}>{projectObj.githubUrl}</ProjectLink>
          </div>
          <div>
          <ProjectLink href={projectObj.url}>{projectObj.url}</ProjectLink>
          </div>
        </Tech>
      <LoomVideo>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}><iframe src={projectObj.loom} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true} style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'
      }}></iframe></div>
      </LoomVideo>
      <Tech>{projectObj.technologiesUsed
        ? projectObj.technologiesUsed.split(',').map((item, i) => (
        <TechItems key={i}>{item}</TechItems>
        ))
        : ''
      }</Tech>
      </VidContainer>
    </ProjectContainer>
  );
}

export default SingleProject;
