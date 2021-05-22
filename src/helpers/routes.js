import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Technologies from '../components/Technologies';

export default function Routes() {
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
      </Switch>
    </div>
  );
}
