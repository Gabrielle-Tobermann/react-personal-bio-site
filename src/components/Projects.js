import React from 'react';
import PropTypes from 'prop-types';
import ProjectCards from './ProjectCards';
import { ProjectsView } from '../styles/ProjectsStyle';

function Projects({ projects }) {
  return (
    <ProjectsView>
      {
        projects.map((item) => (
            <ProjectCards
            screenshot={item.screenshot}
            key={item.firebaseKey}
            />
        ))
      }
    </ProjectsView>
  );
}

Projects.propTypes = {
  setProjects: PropTypes.func,
  projects: PropTypes.array
};

export default Projects;
