import React from 'react';
import PropTypes from 'prop-types';
// import { getProjects } from '../helpers/data/projectsData';
import ProjectCards from './ProjectCards';

function Projects({ projects }) {
  return (
    <div>
      {
        projects.map((item) => (
          <div key={item.firebaseKey}>
            <ProjectCards
            screenshot={item.screenshot}
            title={item.title}
            />
          </div>
        ))
      }
    </div>
  );
}

Projects.propTypes = {
  setProjects: PropTypes.func,
  projects: PropTypes.array
};

export default Projects;
