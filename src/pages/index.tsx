import { Page } from 'components/common';
import './index.scss';
import { Demo } from 'components/demo';
import dots from '../assets/dots.svg';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import appStore from '../assets/app-store.svg';

const IndexPage = () => (
  <Page title="Picks | Landing Page">
    <main className="main index">
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
    </main>
  </Page>
);

export default IndexPage;
