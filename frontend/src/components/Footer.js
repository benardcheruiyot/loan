// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { APP_NAME } from '../config/app';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p>© {new Date().getFullYear()} {APP_NAME}. Licensed by CBK.</p>
      </div>
    </footer>
  );
};

export default Footer;
