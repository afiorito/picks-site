import React from 'react';
import { Layout } from '../components/Layout/Layout';
import SEO from '../components/seo';
import './index.scss';
import { Demo } from '../components/Demo';
import dots from '../images/dots.svg';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const IndexPage = () => (
  <Layout className="index">
    <SEO title="Landing Page" />
    <div className="container">
      <section className="section title-section">
        <img className="dots" src={dots} alt="" />
        <h1>
          Making Decisions. <br /> Simplified.
        </h1>
        <p>Add a little fun to your decision making.</p>
        <OutboundLink target="_blank" href="https://apps.apple.com/us/app/picks-random-decision-maker/id1536305926?mt=8" className="app-store" rel="noopener noreferrer">
          <img src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2020-02-03&kind=iossoftware&bubble=ios_apps" alt="Download on the App Store" />
        </OutboundLink>
      </section>
      <section className="section device-section">
        <Demo />
      </section>
    </div>
  </Layout>
);

export default IndexPage;
