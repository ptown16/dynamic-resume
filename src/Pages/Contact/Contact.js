import React from "react";
import "./Contact.css";

import NavigationCards from "Groups/NavigationCards/NavigationCards";
import About from "Groups/About/About";

import { displayCardSection } from "Utilities/displayCardSection";

import Page from "Pages/Page/Page";

function Contact({ overlay }) {
  return (
    <Page overlay={overlay} className="contact-page">
      <About
        title="Heyooo"
        image="nebraskaN.jpg"
        imageAlt="Nebraskyyyyyy"
        height={120}
      >
        Just let go - and fall like a little waterfall. Any little thing can be
        your friend if you let it be. This is unplanned it really just happens.
        You don't have to be crazy to do this but it does help. And I will
        hypnotize that just a little bit.
      </About>
      <NavigationCards title="To Page" pageOn="Contact" />
      {displayCardSection("contact")}
    </Page>
  );
}

export default Contact;
