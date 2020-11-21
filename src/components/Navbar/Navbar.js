import React from 'react';
import logo from '../../images/logo.svg';
import './navbar.scss';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <Link to="/">
        <img src={logo} alt="Picks Logo" />
      </Link>
      <OutboundLink target="_blank" href="https://apps.apple.com/us/app/picks-random-decision-maker/id1536305926?mt=8" rel="noopener noreferrer">
        <button className="download-button">Download</button>
      </OutboundLink>
    </div>
  </nav>
);
