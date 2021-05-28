import React from 'react';
import PropTypes from 'prop-types';
// import { getProjects } from '../helpers/data/projectsData';
import ProjectUpdateCards from './ProjectUpdateCards';
import ProjectForm from './ProjectForm';

function EditProjects({ setProjects, projects }) {
  return (
    <div>
      <div>
          <ProjectForm
          setProjects={setProjects}
          />
      </div>
      <div>
             {
                projects.map((item, i) => (
                  <div key={i}>
                    <div>
                      <ProjectUpdateCards
                      title={item.title}
                      description={item.description}
                      screenshot={item.screenshot}
                      url={item.url}
                      githubUrl={item.githubUrl}
                      technologiesUsed={item.technologiesUsed}
                      available={item.available}
                      handleUpdateChange={item.handleUpdateChange}
                      handleUpdateClick={item.handleUpdateClick}
                      firebaseKey={item.firebaseKey}
                      setProjects={setProjects}
                      loom={item.loom}
                      />
                    </div>
                    <ProjectForm
                    setProjects={setProjects}
                    title={item.title}
                    description={item.description}
                    screenshot={item.screenshot}
                    url={item.url}
                    githubUrl={item.githubUrl}
                    technologiesUsed={item.technologiesUsed}
                    firebaseKey={item.firebaseKey}
                    loom={item.loom}
                    />
                </div>
                ))
             }
             </div>
          </div>
  );
}

EditProjects.propTypes = {
  setProjects: PropTypes.func,
  projects: PropTypes.array
};

export default EditProjects;
