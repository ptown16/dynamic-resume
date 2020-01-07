import React from "react";

import "./Button.css";

import ThemeDataContext from "Contexts/ThemeDataContext";

import Hoverable from "Components/Hoverable/Hoverable";

import { setThemeColors } from "Utilities/setThemeColors";

class Button extends Hoverable {
  render() {
    const { button, variant, newTab } = this.props;

    const theme = this.context;

    const colors = setThemeColors(theme, [
      "buttonText",
      "buttonTextHover",
      "buttonBackground",
      "buttonBackgroundHover"
    ]);

    const clickHandler = () => {
      window.open(button.link, newTab ? "_blank" : "");
    };

    switch (variant) {
      default:
        return (
          <div
            className="button"
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
            {button.text}
          </div>
        );
    }
  }
}
Hoverable.contextType = ThemeDataContext;

export default Button;
