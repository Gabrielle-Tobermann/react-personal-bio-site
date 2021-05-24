import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/routes';
import './App.scss';

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((authed) => {
  //     if (authed) {
  //       const userObj = {
  //         fullName: authed.displayName,
  //         profileImage: authed.photoURL,
  //         uid: authed.uid,
  //         user: authed.email.split('@')[0]
  //       };
  //       setUser(userObj);
  //     } else if (user || user === null) {
  //       setUser(false);
  //     }
  //   });
  // }, []);

  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
        console.warn('signed in');
      } else if (admin || admin === null) {
        setAdmin(false);
      }
    });
  }, []);

  console.warn(admin);

  return (
    <div className='App'>
      <Router>
        <NavBar
        admin={admin}
        />
        <Routes
        admin={admin}
        />
      </Router>
    </div>
  );
}

export default App;
