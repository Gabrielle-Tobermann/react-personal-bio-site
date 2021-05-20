import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/routes';
import './App.scss';

function App() {
  // const [domWriting, setDomWriting] = useState('Nothing Here!');

  // const handleClick = (e) => {
  //   console.warn(`You clicked ${e.target.id}`);
  //   setDomWriting(`You clicked ${e.target.id}! Check the Console!`);
  // };

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
