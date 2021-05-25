import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProject } from '../helpers/data/projectsData';

function SingleProject() {
  const [projectObj, setProjectObj] = useState({});
  const { firebaseKey } = useParams();

  console.warn('fb', firebaseKey);

  useEffect(() => {
    getSingleProject(firebaseKey).then((resp) => {
      setProjectObj(resp);
      console.warn('resp', resp);
    });
  }, []);

  console.warn(projectObj);

  return (
    <div>
      <h1>{projectObj.title}</h1>
    </div>
  );
}

export default SingleProject;
