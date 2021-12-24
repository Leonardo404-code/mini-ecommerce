import Modal from "react-modal";

export function NewModal({ contentLabel, isOpen, onRequestClose, children }) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "80%",
      height: "90%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#191a21",
      border: "none",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={customStyles}
      ariaHideApp={false}
      closeTimeoutMS={2000}
    >
      {children}
    </Modal>
  );
}
