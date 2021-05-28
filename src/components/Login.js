import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

function Login({ admin }) {
  return (
    <div>
      {
        admin !== null
        && <div>
          {
            admin
              ? <Button color="success" onClick={signOutUser}>Sign Out</Button>
              : <Button color="success" onClick={signInUser}>Sign In</Button>
          }
         </div>
      }
    </div>
  );
}

Login.propTypes = {
  admin: PropTypes.bool
};

export default Login;
