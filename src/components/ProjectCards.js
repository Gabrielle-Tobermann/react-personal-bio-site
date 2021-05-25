import React from 'react';
import PropTypes from 'prop-types';
import { ProjectCard, CardImage, InsideCard } from '../styles/ProjectsStyle';

function ProjectCards({ screenshot }) {
  return (
    <ProjectCard>
         <InsideCard>
        <CardImage top width="100%" src={screenshot} alt="Card image cap" />
         </InsideCard>
    </ProjectCard>
  );
}

ProjectCards.propTypes = {
  screenshot: PropTypes.string,
  title: PropTypes.string
};

export default ProjectCards;
