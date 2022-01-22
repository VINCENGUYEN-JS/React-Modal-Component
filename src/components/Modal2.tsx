import React, { useEffect, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal = (props: ModalProps) => {
  const modalOverlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const closeOnEscapeKeyDown = useCallback((e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  }, []);

  const onClickOutSide = (e: MouseEvent) => {
    const element = e.target;
    if (modalRef.current && !modalRef.current.contains(element as Node)) {
      props.onClose();
    }
  };

  useEffect(() => {
    modalRef.current && modalRef.current.focus();
    document.body.addEventListener("click", onClickOutSide);
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
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" ref={modalOverlayRef} onClick={props.onClose}>
        <div
          className="modal-content"
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <button className="button" onClick={props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")!
  );
};
export default Modal;
