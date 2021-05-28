import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/projects.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const createProject = (projectObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/projects.json`, projectObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/projects/${response.data.name}.json`, body)
        .then(() => {
          getProjects().then((resp) => resolve(resp));
        });
    })
    .catch((error) => reject(error));
});

const updateProject = (project) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/projects/${project.firebaseKey}.json`, project)
    .then(() => {
      getProjects().then((resp) => resolve(resp));
    }).catch((error) => reject(error));
});

const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/projects/${firebaseKey}.json`)
    .then(() => {
      getProjects().then((resp) => resolve(resp));
    }).catch((error) => reject(error));
});

const getSingleProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/projects/${firebaseKey}.json`)
    .then((resp) => resolve(resp.data))
    .catch((error) => reject(error));
});

export {
  createProject, getProjects, updateProject, deleteProject, getSingleProject
};
