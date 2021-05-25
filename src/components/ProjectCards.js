import React from 'react';
import { Card, CardImg } from 'reactstrap';
import PropTypes from 'prop-types';

function ProjectCards({ screenshot }) {
  return (
    <div className="project-cards">
         <Card className="individual-cards rounded-3">
        <CardImg top width="100%" src={screenshot} alt="Card image cap" />
         </Card>
    </div>
  );
}

ProjectCards.propTypes = {
  screenshot: PropTypes.string,
  title: PropTypes.string
};

export default ProjectCards;
