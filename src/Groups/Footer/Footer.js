import React from "react";
import "./Footer.css";

import themeData from "Data/themes.json";

import ThemeDataContext from "Contexts/ThemeDataContext";

import { setThemeColors } from "Utilities/setThemeColors";

import FooterIcon from "Components/FooterIcon/FooterIcon";

function Footer() {
  let theme = React.useContext(ThemeDataContext);
  if (!theme) {
    theme = themeData.themes["default"];
  }
  let colors = setThemeColors(theme, [
    "footer",
    "footerExtra",
    "footerExtraBackground"
  ]);
  return (
    <div
      className="footer"
      style={{ backgroundColor: colors.footer, boxShadow: theme.shadow }}
    >
      <div className="footer-icons">
        <FooterIcon
          variant="linkedin"
          link="https://www.linkedin.com/in/peyton-tanzillo/"
        />
        <FooterIcon variant="email" link="mailto:peytontanzillo@icloud.com" />
        <FooterIcon variant="phone" link="sms:+1512-484-9318" />
        <FooterIcon
          variant="home"
          link="https://goo.gl/maps/z4o6iPoEp9oT9JCE7"
        />
      </div>
      <div
        className="footer-extra"
        style={{
          backgroundColor: colors.footerExtraBackground,
          color: colors.footerExtra
        }}
      >
        <p className="footer-extra-line">Copyright © 2020 - 2022 Peyton Tanzillo</p>
        <p className="footer-extra-line">
          Footer Icons made by Flaticon users Freepik (Home, Phone, Email) and
          Dave Gandy (LinkedIn).
        </p>
      </div>
    </div>
  );
}

export default Footer;
