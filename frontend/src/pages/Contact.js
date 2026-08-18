import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { APP_NAME, SUPPORT_EMAIL } from '../config/app';
import './Home.css';

const Contact = () => {
  useEffect(() => {
    document.title = `Contact | ${APP_NAME}`;
  }, []);

  return (
    <div className="container">
      <Header showHelp={false} logoInitial="L" />
      <div className="card">
        <h1>Contact Us</h1>
        <p>
          Need help with your loan application or want to ask about our terms?
          Reach out below.
        </p>
        <h2>Customer support</h2>
        <p>Email: {SUPPORT_EMAIL}</p>
        <p>Phone: +254 700 000 000</p>
        <h2>Office hours</h2>
        <p>Monday to Friday, 9:00 AM to 5:00 PM EAT</p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
