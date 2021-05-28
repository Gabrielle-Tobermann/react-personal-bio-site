import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, CardTitle, CardText
} from 'reactstrap';
import { deleteProject } from '../helpers/data/projectsData';

function ProjectUpdateCards({
  title,
  description,
  screenshot,
  url,
  githubUrl,
  technologiesUsed,
  available,
  loom,
  firebaseKey,
  setProjects
}) {
  const handleDelete = () => {
    deleteProject(firebaseKey).then((resp) => setProjects(resp));
  };

  return (
    <div>
      <Card body>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{description}</CardText>
        <CardText>{url}</CardText>
        <CardText>{loom}</CardText>
        <CardText>{githubUrl}</CardText>
        <CardText>{technologiesUsed}</CardText>
        <CardText>{screenshot}</CardText>
        <CardText>{available}</CardText>
        <Button onClick={handleDelete}>Delete {title}</Button>
      </Card>
    <div>
    </div>
    </div>
  );
}

ProjectUpdateCards.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  githubUrl: PropTypes.string,
  url: PropTypes.string,
  screenshot: PropTypes.string,
  available: PropTypes.bool,
  technologiesUsed: PropTypes.string,
  firebaseKey: PropTypes.string,
  setProjects: PropTypes.func,
  loom: PropTypes.string
};

export default ProjectUpdateCards;
