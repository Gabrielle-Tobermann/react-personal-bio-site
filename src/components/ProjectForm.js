import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Input, Label, FormGroup, Form,
} from 'reactstrap';
import { createProject, updateProject } from '../helpers/data/projectsData';

function ProjectForm({
  setProjects, title, description, screenshot, url, githubUrl, technologiesUsed, available, firebaseKey
}) {
  const [project, setProject] = useState({
    title: title || '',
    description: description || '',
    screenshot: screenshot || '',
    url: url || '',
    githubUrl: githubUrl || '',
    technologiesUsed: technologiesUsed || '',
    available: available || false,
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'available' ? e.target.checked : e.target.value
    }));
  };

  const handleClick = (e) => {
    console.warn(project);
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(project).then((response) => console.warn(response));
    } else {
      createProject(project).then((response) => setProjects(response));
    }
  };

  return (
    <div>
         <Form>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="text" name="description" id="description" value={description} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="githubUrl">Github Link</Label>
        <Input type="url" name="githubUrl" id="githubUrl" value={githubUrl} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="screenshot">Screenshot</Label>
        <Input type="url" name="screenshot" id="screenshot" value={screenshot} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="technologies">Technologies Used</Label>
        <Input type="text" name="technologiesUsed" id="technologiesUsed" value={technologiesUsed} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input type="text" name="title" id="title" value={title} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="url">Deployed Link</Label>
        <Input type="url" name="url" id="url" value={url} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input name="available" type="checkbox" value={available} onChange={handleInputChange}/>
          Available
        </Label>
      </FormGroup>
      <Button type='submit' onClick={handleClick}>Submit</Button>
      </Form>
    </div>
  );
}

ProjectForm.propTypes = {
  setProject: PropTypes.func,
  setProjects: PropTypes.func,
  project: PropTypes.object,
  description: PropTypes.string,
  title: PropTypes.string,
  githubUrl: PropTypes.string,
  url: PropTypes.string,
  screenshot: PropTypes.string,
  available: PropTypes.bool,
  technologiesUsed: PropTypes.string,
  handleUpdateClick: PropTypes.func,
  handleUpdateChange: PropTypes.func,
  firebaseKey: PropTypes.string
};

export default ProjectForm;
