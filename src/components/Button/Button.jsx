import React from 'react'
import classNames from 'classnames'

import style from "./Button.scss";

const Button = ({ size = "s", type, children, onClick }) => {
  const btnClass = classNames({
    btn: true,
    "btn--secondary": type === "secondary",
    "btn--primary": type === "primary",
    "btn--small": size === "s",
    "btn--medium": size === "m",
  });

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;