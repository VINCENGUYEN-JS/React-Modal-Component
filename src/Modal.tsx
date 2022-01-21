import React, { useEffect, useCallback } from "react";
import "./Modal.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal = (props: ModalProps) => {
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

  const modalClassName = ["modal", props.isOpen ? "show" : ""].join(" ");

  return (
    <>
      <div className={modalClassName} onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
    </>
  );
};
export default Modal;
