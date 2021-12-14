import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import './footer.scss';

export const Footer = () => (
  <footer className="footer">
    <div className="footer__container container">
      <div className="section-container">
        <section className="footer__section">
          <h4 className="footer__section-title">Contact</h4>
          <OutboundLink className="footer__link" href="https://twitter.com/electriapp">
            Twitter
          </OutboundLink>
          <OutboundLink className="footer__link" href="https://www.instagram.com/electriapp">
            Instagram
          </OutboundLink>
          <OutboundLink className="footer__link" href="https://www.facebook.com/electriapp">
            Facebook
          </OutboundLink>
          <a className="footer__link" href="mailto:support@electriapp.com">
            Email
          </a>
        </section>
        <section className="footer__section">
          <h4 className="footer__section-title">Picks</h4>
          <Link className="footer__link" to="/">
            Home
          </Link>
          <OutboundLink
            href="https://apps.apple.com/us/app/picks-random-generator/id1536305926?mt=8"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Picks
          </OutboundLink>
          <Link className="footer__link" to="/about">
            About
          </Link>
        </section>
        <section className="footer__section">
          <h4 className="footer__section-title">Policies</h4>
          <Link className="footer__link" to="/privacy">
            Privacy Policy
          </Link>
          <Link className="footer__link" to="/terms">
            Terms of Use
          </Link>
        </section>
      </div>
      <div className="footer__copyright">
        © {new Date().getFullYear()}
        {` `}Electriapp
      </div>
    </div>
  </footer>
);
