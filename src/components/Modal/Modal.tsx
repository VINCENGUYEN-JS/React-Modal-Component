import React, { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Content from "./Content";
import "./Modal.less";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

const Modal = (props: ModalProps) => {
  const prefixCls = Modal.displayName;
  const closeOnEscapeKeyDown = useCallback((e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  }, []);

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.isOpen}
      unmountOnExit
      timeout={{ enter: 0, exit: 10 }}
    >
      <Content {...props} closable={true} prefixCls={prefixCls} />
    </CSSTransition>,
    document.getElementById("root")!
  );
};

Modal.displayName = "modal";

export default Modal;
