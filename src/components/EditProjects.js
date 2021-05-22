import React, { useEffect, useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import { createProject, getProjects } from '../helpers/data/projectsData';

export default function EditProjects() {
  const [project, setProject] = useState({
    title: '',
    description: '',
    screenshot: '',
    url: '',
    githubUrl: '',
    technologiesUsed: '',
    available: false
  });
  useEffect(() => {
    getProjects().then((resp) => console.warn(resp));
  }, []);

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'available' ? e.target.checked : e.target.value
    }));
    console.warn(project);
  };
  const handleClick = (e) => {
    e.preventdefault();
    createProject(project).then((response) => console.warn(response));
  };

  return (
    <div>
      <Form>
      <FormGroup>
        <Label for="sescription">Description</Label>
        <Input type="text" name="description" id="description" onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="githubUrl">Github Link</Label>
        <Input type="url" name="githubUrl" id="githubUrl" onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="screenshot">Screenshot</Label>
        <Input type="url" name="screenshot" id="screenshot" onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="technologies">Technologies Used</Label>
        <Input type="text" name="technologiesUsed" id="technologiesUsed" onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input type="text" name="title" id="title" onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="url">Deployed Link</Label>
        <Input type="url" name="url" id="url" onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input name="available" type="checkbox" onChange={handleInputChange}/>
          Available
        </Label>
      </FormGroup>
      <Button type='submit' onClick={handleClick}>Submit</Button>
      </Form>
    </div>
  );
}
