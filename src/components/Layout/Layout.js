/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import './layout.scss';

export const Layout = ({ children, className }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className={`main ${className}`}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
