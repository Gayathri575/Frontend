import React, { useState } from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import facebook_Icon from '../../assets/facebook_icon.png';
import twitter_Icon from '../../assets/twitter_icon.png';
import linkedin_Icon from '../../assets/linkedin_icon.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className='footer' id='footer'>
      <div className="footer-content">
        {/* Left Section: Logo & Social Media */}
        <div className="footer-content-left">
          <img src={assets.jhead} alt="Logo" className="jhead" width="100" height="auto" />
          <p>Your favorite food, delivered fast.</p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook_Icon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter_Icon} alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin_Icon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Center Section: Company Links */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#delivery">Delivery</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right Section: Contact Info & Newsletter */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>📞 Contact: +1-825-575</li>
            <li>📧 Email: <a href="mailto:jalapenodelivry@gmail.com">jalapenodelivry@gmail.com</a></li>
          </ul>

          {/* Newsletter Signup */}
          <form className="newsletter" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr />
      <p>&copy; 2025 Jalapeño. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
