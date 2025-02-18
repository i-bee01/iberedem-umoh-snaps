import "./Footer.scss";

import facebookIcon from "../../../assets/images/facebook.svg";
import twitterIcon from "../../../assets/images/x_twitter.svg";
import instagramIcon from "../../../assets/images/instagram.svg";
import pinterestIcon from "../../../assets/images/pinterest.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="brand">Snaps</div>
        <div className="footer__menu">
          <div>
            <p>
              <a href="/photographers" className="footer__link">
                For photographers
              </a>
            </p>

            <p>
              <a href="/hire" className="footer__link">
                Hire Talent
              </a>
            </p>

            <p>
              <a href="/inspiration" className="footer__link">
                Inspiration
              </a>
            </p>
          </div>

          <div>
            <p>
              <a href="/about" className="footer__link">
                About
              </a>
            </p>

            <p>
              <a href="/careers" className="footer__link">
                Careers
              </a>
            </p>

            <p>
              <a href="/support" className="footer__link">
                Support
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer__social">
        <a href="https://facebook.com" className="footer__social-link">
          <img src={facebookIcon} alt="Facebook" />
        </a>

        <a href="https://twitter.com" className="footer__social-link">
          <img src={twitterIcon} alt="Twitter" />
        </a>

        <a href="https://instagram.com" className="footer__social-link">
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a href="https://pinterest.com" className="footer__social-link">
          <img src={pinterestIcon} alt="Pinterest" />
        </a>
      </div>

      <div className="footer__legal">
        <p>© 2024 Snaps</p>

        <p>·</p>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Cookies</p>
      </div>
    </section>
  );
};

export default Footer;
