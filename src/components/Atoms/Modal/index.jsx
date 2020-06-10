import React from "react";
import PropTypes from "prop-types";

let Modal = (props) => {
  if (!props.show) {
    return null;
  } else {
    return (
      <div className="backdrop" style={{ backdropStyle }}>
        <div className="modal" style={{ modalStyle }}>
          {props.children}
          <div className="footer">
            <button onClick={props.onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
};

const backdropStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.3)",
  padding: 50,
};

const modalStyle = {
  backgroundColor: "#fff",
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: "0 auto",
  padding: 30,
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
