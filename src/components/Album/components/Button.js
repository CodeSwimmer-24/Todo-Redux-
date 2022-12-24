import React from "react";
import "./Button.css";
import className from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  ...rest
}) => {
  const classes = className("allClass", {
    primary: primary,
    secondary: secondary,
  });
  return (
    <div>
      <button {...rest} className={classes}>
        {children}
      </button>
    </div>
  );
};

export default Button;
