import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

function ProjectCards({ screenshot, title }) {
  return (
    <div>
         <Card>
        <CardImg top width="100%" src={screenshot} alt="Card image cap" />
        <CardTitle>{title}</CardTitle>
         </Card>
    </div>
  );
}

ProjectCards.propTypes = {
  screenshot: PropTypes.string,
  title: PropTypes.string
};

export default ProjectCards;
