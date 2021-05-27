import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import ProjectCards from './ProjectCards';
import { ProjectsView, Title } from '../styles/ProjectsStyle';

function Projects({ projects }) {
  return (
    <div style={{ height: 'calc(92vh - 40px)' }}>
    <Typist cursor={{ show: false }}>
    <Title>PROJECTS</Title>
    </Typist>
    <ProjectsView>
      {
        projects.map((item) => (
            <ProjectCards
            screenshot={item.screenshot}
            firebaseKey={item.firebaseKey}
            key={item.firebaseKey}
            />
        ))
      }
    </ProjectsView>
    </div>
  );
}

Projects.propTypes = {
  setProjects: PropTypes.func,
  projects: PropTypes.array
};

export default Projects;
