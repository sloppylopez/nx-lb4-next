// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Button.css";

import { buttonTypes, buttonVariants, buttonSizes } from "./constants";

class Button extends Component {
  static defaultProps = {
    isDisabled: false,
    type: "filled",
    variant: "oval",
    size: "medium",
    backgroundColor: "#1ea7fd",
    textColor: "#ffffff",
  };

  static buttonTypes = buttonTypes;
  static buttonVariants = buttonVariants;
  static buttonSizes = buttonSizes;

  renderButton = () => {
    const {
      text,
      isDisabled,
      type,
      variant,
      size,
      backgroundColor,
      textColor,
      onClick,
    } = this.props;
    return (
      <button
        onClick={onClick}
        className={`default ${variant} ${size} ${
          isDisabled ? "disabled" : ""
        }`}
        style={
          type === buttonTypes.outline
            ? {
              border: `1px solid ${backgroundColor}`,
              color: "#000000",
              backgroundColor: "transparent",
            }
            : {
              backgroundColor: `${backgroundColor}`,
              border: `1px solid ${backgroundColor}`,
              color: textColor,
            }
        }
        disabled={isDisabled}
      >
        {text}
      </button>
    );
  };

  render() {
    return this.renderButton();
  }
}

Button.propTypes = {
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  type: PropTypes.oneOf([buttonTypes.outline, buttonTypes.filled]),
  variant: PropTypes.oneOf([buttonVariants.oval, buttonVariants.rectangular]),
  size: PropTypes.oneOf([
    buttonSizes.small,
    buttonSizes.medium,
    buttonSizes.large,
  ]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
};

export { Button };
