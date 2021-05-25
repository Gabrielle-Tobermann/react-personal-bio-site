import React from 'react';
import PropTypes from 'prop-types';
import ProjectCards from './ProjectCards';

function Projects({ projects }) {
  return (
    <div className="projects-view">
      {
        projects.map((item) => (
          <div key={item.firebaseKey}>
            <ProjectCards
            screenshot={item.screenshot}
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
