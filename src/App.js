import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./Modal";

function App() {
  const ModalRef = useRef();
  const openModal = () => {
    ModalRef.current.open();
  };
  const closeModal = () => {
    ModalRef.current.close();
  };
  return (
    <div className="App">
      <button onClick={openModal}>Click</button>
      <Modal ref={ModalRef}>
        <h1>Modal Header</h1>
        <p>Hi Vince , have a great day !</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default App;
