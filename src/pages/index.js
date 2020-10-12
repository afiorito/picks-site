import React from 'react';
import { Layout } from '../components/Layout/Layout';
import SEO from '../components/seo';
import './index.scss';
import { Demo } from '../components/Demo';
import dots from '../images/dots.svg';

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
        <a
          className="ios-download"
          href="https://apps.apple.com/us/app/instagram/id389801252?itsct=apps_box&amp;itscg=30200"
        >
          <img
            src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-US?size=250x83&amp;releaseDate=1286323200&h=18f79cd4c60f3a0a079c6b8b1ee6f670"
            alt="Download on the App Store"
          />
        </a>
      </section>
      <section className="section device-section">
        <Demo />
      </section>
    </div>
  </Layout>
);

export default IndexPage;
