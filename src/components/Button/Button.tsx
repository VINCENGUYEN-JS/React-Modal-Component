import React from "react";
import classNames from "classnames";
import "./Button.less";

type ButtonType = "default" | "primary" | "ghost" | "dashed" | "link" | "text";

type BaseButtonProps = {
  type: ButtonType;
  children: React.ReactNode;
  onClick: () => void;
};

const prefixCls = "button";

const Button = (props: BaseButtonProps) => {
  const { type, children, onClick } = props;
  const classes = classNames(prefixCls);
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
