import React, { useState } from "react";
import Modal from "./components/Modal.tsx";
import Modal2 from "./components/Modal2.tsx";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <button onClick={setIsOpen}>Show modal</button>
      <Modal isOpen={isOpen} title="My Modal" onClose={() => setIsOpen(false)}>
        <p>Use event bubbling to detect event click outside</p>
      </Modal>
      <br />
      <button onClick={setIsOpen}>Show modal 2</button>
      <Modal2
        isOpen={isOpen}
        title="My Modal 2"
        onClose={() => setIsOpen(false)}
      >
        <p>Use ref to detect event click outside</p>
      </Modal2>
    </main>
  );
};
export default App;
