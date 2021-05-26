import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { signOutUser } from '../helpers/auth';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav-bar" color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse className="collapse" isOpen={isOpen} navbar>
          <Nav className="nav-bar-items" navbar>
          <NavItem>
              <Link className="nav-link" to='/'><img style={{ width: '40px', height: 'auto', borderRadius: '2%' }} src="https://user-images.githubusercontent.com/76187279/119601704-5355f200-bdaf-11eb-82db-e9f8b7e5a531.png"/></Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/bio'>BIO</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/projects'>PROJECTS</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/technologies'>TECHNOLOGIES</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link"to='/contact'>CONTACT INFORMATION</Link>
            </NavItem>
            {
              admin ? <NavItem>
              <Link className="nav-link"to='/edit-projects'>EDIT PORJECT</Link>
            </NavItem>
                : ''
            }
          </Nav>
          {
            admin ? <Button onClick={signOutUser}>Sign Out</Button>
              : ''
          }
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.bool
};

export default NavBar;
