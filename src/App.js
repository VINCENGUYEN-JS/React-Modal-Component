import React, { useState } from "react";
import Modal from "./components/Modal.tsx";
import Modal2 from "./components/Modal2.tsx";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <button onClick={setIsOpen}>Show modal</button>
      <Modal
        isOpen={isOpen}
        title="My Modal"
        onClose={() => setIsOpen(false)}
        okText="Ok"
        cancelText="Cancel"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </main>
  );
};
export default App;
