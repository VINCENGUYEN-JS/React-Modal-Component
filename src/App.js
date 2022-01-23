import React, { useState } from "react";

import Button from "./components/Button/Button.tsx";
import Modal from "./components/Modal/Modal.tsx";
import Modal2 from "./components/Modal/Modal2.tsx";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <Button onClick={() => setIsOpen(true)}>Show modal</Button>
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
