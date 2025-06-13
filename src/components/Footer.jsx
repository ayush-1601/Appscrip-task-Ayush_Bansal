import "../styles/footer.css";
import InstagramIcon from '../assets/icons/instagram.svg'
import LinkedinIcon from '../assets/icons/linkedin.svg'
import ApplePayIcon from '../assets/icons/applepay.svg'
import GPayIcon from '../assets/icons/pay.svg'
import MasterCardIcon from '../assets/icons/masterCard.svg'
import AmexIcon from '../assets/icons/amex.svg'
import OPayIcon from '../assets/icons/opay.svg'
import PayPalIcon from '../assets/icons/paypal.svg'

export const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top-left">
          <div
            style={{
              gap: "24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3>Be the First to know</h3>

            <p>Sign up for updates from mettā muse.</p>
          </div>

          <div className="footer-subscribe">
            <input type="text" placeholder="Enter your e-mail..." />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="footer-top-right">
          <h3>Contact Us</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>Currency</h3>

          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div className="footer-column-links">
            <h3>mettà muse</h3>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliance Docs</li>
            </ul>
          </div>
          <div className="footer-column-links">
            <h3>QUICK LINKS</h3>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Returns & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-right">
            <div>
                <h3>Follow Us</h3>
                <div className="footer-icons">
                    <img src={InstagramIcon} alt="" />
                    <img src={LinkedinIcon} alt="" />
                </div>
            </div>

            <div>
                <h3>mettā muse Accepts</h3>
                <div className="footer-icons">
                    <img src={GPayIcon} alt="" />
                    <img src={MasterCardIcon} alt="" />
                    <img src={PayPalIcon} alt="" />
                    <img src={AmexIcon} alt="" />
                    <img src={ApplePayIcon} alt="" />
                    <img src={OPayIcon} alt="" />
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};
