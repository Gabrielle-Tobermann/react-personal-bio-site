import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import EditProjects from '../components/EditProjects';
import Home from '../components/Home';
import Login from '../components/Login';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import SingleProject from '../components/SingleProject';

const PrivateRoute = ({ component: Component, admin, ...rest }) => {
  const routeChecker = (remainder) => (admin
    ? (<Component {...remainder} admin={admin} />)
    : (<Redirect to={{ pathname: '/', state: { from: remainder.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  admin: PropTypes.bool
};
function Routes({ admin, projects, setProjects }) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
        component={Home}/>
        <Route
        exact path='/projects'
        component={() => <Projects
        setProjects={setProjects}
        projects={projects}
        />
        }
        />
        <Route
        exact path='/projects/:firebaseKey'
        component={SingleProject}
        />
         <Route
        exact path='/bio'
        component={Bio}
        />
         <Route
        exact path='/technologies'
        component={Technologies}
        />
        <Route
        exact path='/contact'
        component={Contact}
        />
        <PrivateRoute
        exact path='/edit-projects'
        component={() => <EditProjects
        setProjects={setProjects}
        projects={projects}
        />
        }
        admin={admin}
        />
        <Route
        exact path='/login'
        component={() => <Login admin={admin}/>}
        admin={admin}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  admin: PropTypes.bool,
  setProjects: PropTypes.func,
  projects: PropTypes.array
};

export default Routes;
