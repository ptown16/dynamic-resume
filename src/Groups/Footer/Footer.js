import React from 'react';
import './Footer.css';

import ThemeDataContext from 'Contexts/ThemeDataContext'

import {setThemeColors} from 'Utilities/setThemeColors'

import FooterIcon from 'Components/FooterIcon/FooterIcon'

function Footer() {

  let theme = React.useContext(ThemeDataContext)
  let colors = setThemeColors(theme, ["footer", "footerExtra", "footerExtraBackground"])
  return (
    <div className="footer" style={{ backgroundColor: colors.footer, boxShadow: theme.shadow }}>
      <div className="footer-icons">
        <FooterIcon variant="linkedin" link="https://www.linkedin.com/in/peyton-tanzillo/"/>
        <FooterIcon variant="email" link="mailto:peytontanzillo@gmail.com"/>
        <FooterIcon variant="phone" link="sms:+1512-484-9318"/>
        <FooterIcon variant="home" link="https://www.google.com/maps/place/3209+Hancock+Dr,+Austin,+TX+78731/@30.3317691,-97.7603905,17z/data=!3m1!4b1!4m5!3m4!1s0x8644cae8ac340963:0xb438e00ae172bed1!8m2!3d30.3317645!4d-97.7582018"/>
      </div>
      <div className="footer-extra" style={{ backgroundColor: colors.footerExtraBackground, color: colors.footerExtra}}>
        <p className="footer-extra-line">Copyright © 2019 Peyton Tanzillo</p>
        <p className="footer-extra-line">Footer Icons made by Flaticon users Freepik (Home, Phone, Email) and Dave Gandy (LinkedIn).</p>
      </div>
    </div>
  )
}

export default Footer;
