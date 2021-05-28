import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  ProjectCard, CardImage, InsideCard, HoverText
} from '../styles/ProjectsStyle';

function ProjectCards({ screenshot, firebaseKey }) {
  const history = useHistory();

  const handleCardClick = () => {
    history.push(`/projects/${firebaseKey}`);
  };

  return (
    <ProjectCard>
         <InsideCard onClick={handleCardClick}>
        <CardImage top width="100%" src={screenshot} alt="Card image cap"/>
        <HoverText>CLICK TO SEE DETAILS</HoverText>
         </InsideCard>
    </ProjectCard>
  );
}

ProjectCards.propTypes = {
  screenshot: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default ProjectCards;
