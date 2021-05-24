import React, { useEffect, useState } from 'react';
import { getProjects } from '../helpers/data/projectsData';
import ProjectUpdateCards from './ProjectUpdateCards';
import ProjectForm from './ProjectForm';

export default function EditProjects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects().then((resp) => setProjects(resp));
  }, []);

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
                    />
                </div>
                ))
             }
             </div>
          </div>
  );
}
