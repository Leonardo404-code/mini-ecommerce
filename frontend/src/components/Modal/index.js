import React from "react";
import Modal from "react-modal";
import styles from "./ModalStyle.module.css";

export function NewModal({ contentLabel, isOpen, onRequestClose, children }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      ariaHideApp={false}
      closeTimeoutMS={2000}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      {children}
    </Modal>
  );
}
