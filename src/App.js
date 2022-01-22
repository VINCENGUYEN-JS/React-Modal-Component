import React, { useState } from "react";
import Modal from "./components/Modal.tsx";
// import "App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <button onClick={setIsOpen}>Show modal</button>
      <Modal isOpen={isOpen} title="My Modal" onClose={() => setIsOpen(false)}>
        <p>This is my modal body</p>
      </Modal>
    </main>
  );
};
export default App;
