import React from "react";

import "./Button.css";

import ThemeDataContext from "Contexts/ThemeDataContext";

import Hoverable from "Components/Hoverable/Hoverable";

import { setThemeColors } from "Utilities/setThemeColors";

class Button extends Hoverable {
  render() {
    const { link, variant, newTab = false, children } = this.props;

    const theme = this.context;

    const colors = setThemeColors(theme, [
      "buttonText",
      "buttonTextHover",
      "buttonBackground",
      "buttonBackgroundHover"
    ]);

    const clickHandler = () => {
      if (newTab) {
        window.open(link, "_blank");
      } else {
        window.location.href = link;
      }
    };

    let buttonClassName;
    switch (variant) {
      case "small-right":
        buttonClassName = "button-small button-float-right button";
        break;
      default:
        buttonClassName = "button";
        break;
    }

    return (
      <div
        className={buttonClassName}
        onClick={clickHandler}
        style={{
          color: this.state.hovered
            ? colors.buttonTextHover
            : colors.buttonText,
          backgroundColor: this.state.hovered
            ? colors.buttonBackgroundHover
            : colors.buttonBackground,
          boxShadow: this.state.hovered ? "" : theme.shadow
        }}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        {children}
      </div>
    );
  }
}
Hoverable.contextType = ThemeDataContext;

export default Button;
