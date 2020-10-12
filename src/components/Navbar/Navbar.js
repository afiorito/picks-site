import React from 'react';
import logo from '../../images/logo.svg';
import './navbar.scss';
import { Link } from 'gatsby';

export const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <Link to="/">
        <img src={logo} alt="Picks Logo" />
      </Link>
      <button className="download-button">Download</button>
    </div>
  </nav>
);
