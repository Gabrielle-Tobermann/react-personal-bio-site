import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import EditProjects from '../components/EditProjects';
import Home from '../components/Home';
import Login from '../components/Login';
import Technologies from '../components/Technologies';

function Routes({ admin }) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
        component={Home}/>
        <Route
        exact path='/projects'
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
        <Route
        exact path='/edit-projects'
        component={EditProjects}
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
  admin: PropTypes.bool
};

export default Routes;
