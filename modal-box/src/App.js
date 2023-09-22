import { useState } from "react";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(true)}>
        {show ? "hide" : "show"} modal
      </button>
      <Modal show={show} title="Modal" onClose={() => setShow(false)}>
        <h1>Modal pop Up</h1>
      </Modal>
    </div>
  );
}

const Modal = ({ show, onClose, title, children }) => {
  return (
    show && (
      <>
        <div className="modal-backdrop" onClick={onClose}></div>
        <div className={`modal-wrapper ${show ? "active" : ""}`}>
          <div className="modal-header">
            <div className="modal-title">{title}</div>
            <span className="modal-close" onClick={onClose}>
              X
            </span>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </>
    )
  );
};
