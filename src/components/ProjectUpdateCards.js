import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, CardTitle, CardText
} from 'reactstrap';

function ProjectUpdateCards({
  title,
  description,
  screenshot,
  url,
  githubUrl,
  technologiesUsed,
  available,
}) {
  return (
    <div>
      <Card body>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{description}</CardText>
        <CardText>{url}</CardText>
        <CardText>{githubUrl}</CardText>
        <CardText>{technologiesUsed}</CardText>
        <CardText>{screenshot}</CardText>
        <CardText>{available}</CardText>
        <Button>Go somewhere</Button>
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
};

export default ProjectUpdateCards;
