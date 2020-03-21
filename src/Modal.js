import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
  useCallback
} from "react";
import ReactDOM from "react-dom";
const Modal = forwardRef(({ children }, ref) => {
  const [display, setDisplay] = useState(false);
  const modalBoxRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => open(),
      close: () => close()
    };
  });

  const open = () => {
    setDisplay(true);
  };
  const close = () => {
    setDisplay(false);
  };

  const hideModal = useCallback(e => {
    if (e.target !== modalBoxRef) {
      close();
    }
  }, []);

  useEffect(() => {
    document.getElementById("modal-root").addEventListener("click", hideModal);
    return () =>
      document
        .getElementById("modal-root")
        .removeEventListener("click", hideModal);
  }, [hideModal]);

  if (display) {
    return ReactDOM.createPortal(
      <div className={"modal-wrapper"}>
        <div className={"modal-backdrop"}></div>
        <div className={"modal-box"} ref={modalBoxRef}>
          {children}
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
});

export default Modal;
