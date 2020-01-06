import React from "react";
import "./Page.css";

import themeData from "Data/themes.json";

import Header from "Groups/Header/Header";
import Footer from "Groups/Footer/Footer";

import ThemeDataContext from "Contexts/ThemeDataContext";

import { setThemeColors } from "Utilities/setThemeColors";

function Page({ overlay, children }) {
  let theme = React.useContext(ThemeDataContext);
  if (!theme) {
    theme = themeData.themes["default"];
  }

  const colors = setThemeColors(theme, ["pageBackground"]);
  const pageStyle = { backgroundColor: colors.pageBackground };
  if (overlay) {
    return (
      <div className="page noscroll" style={pageStyle}>
        <Header />
        {children}
        <div className="overlay">{overlay}</div>
      </div>
    );
  }

  return (
    <div className="page" style={pageStyle}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Page;
