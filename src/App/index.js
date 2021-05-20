import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import firebaseConfig from '../helpers/apiKeys';
import NavBar from '../components/NavBar';
import Routes from '../helpers/routes';
import './App.scss';

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <Routes/>
        <NavBar/>
      </Router>
    </div>
  );
}

export default App;
