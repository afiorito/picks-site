import React from 'react';
import { Layout } from '../components/Layout/Layout';
import Seo from '../components/seo';
import './index.scss';
import { Demo } from '../components/Demo';
import dots from '../images/dots.svg';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import appStore from '../images/app-store.svg';

const IndexPage = () => (
  <Layout className="index">
    <Seo title="Landing Page" />
    <div className="container">
      <section className="section title-section">
        <img className="dots" src={dots} alt="" />
        <h1>
          Making Decisions. <br /> Simplified.
        </h1>
        <p>Add a little fun to your decision making.</p>
        <OutboundLink
          target="_blank"
          href="https://apps.apple.com/us/app/picks-random-generator/id1536305926?mt=8"
          className="app-store"
          rel="noopener noreferrer"
        >
          <img src={appStore} alt="Download on the App Store" />
        </OutboundLink>
      </section>
      <section className="section device-section">
        <Demo />
      </section>
    </div>
  </Layout>
);

export default IndexPage;
