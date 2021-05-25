import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProject } from '../helpers/data/projectsData';

function SingleProject() {
  const [projectObj, setProjectObj] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleProject(firebaseKey).then((resp) => {
      setProjectObj(resp);
    });
  }, []);

  return (
    <div>
      <h1>{projectObj.title}</h1>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}><iframe src={`${projectObj.loom}&output=embed`} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true" style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'
      }}></iframe></div>
    </div>
  );
}

export default SingleProject;
