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
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
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
            <NavItem>
              <Link className="nav-link"to='/edit-projects'>EDIT PORJECT</Link>
            </NavItem>
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
