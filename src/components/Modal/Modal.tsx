"use client";
import React from "react";
import styles from "./Modal.module.scss";
import TModalProps from "@/types/Modal";

const Modal = ({ children, onClose }: TModalProps) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
