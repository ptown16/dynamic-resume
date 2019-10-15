import React from 'react';
import './Contact.css';

function Contact({header}) {
  return (
    <div className="contact-page">
      {header}
      <header className="contact-box">
        <p>
          Contact!
        </p>
      </header>
    </div>
  );
}

export default Contact;
