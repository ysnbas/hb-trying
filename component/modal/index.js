import React from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import Button from "@/component/button";

export default function Modal({ show, onClose, title, message, linkName }) {
  const modalContent = show && (
    <div className={styles.background}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div className={styles.close} onClick={onClose}>
            X
          </div>
        </div>
        <div className={styles.body}>
          <p className={styles.message}>{message}</p>
          <p className={styles.linkName}>{linkName}</p>
          <div className={styles.buttonWrapper}>
            <Button text="OK" />
            <Button text="CANCEL" onclick={onClose} />
          </div>
        </div>
      </div>
    </div>
  );

  if (typeof document !== "undefined") {
    return createPortal(modalContent, document.getElementById("modal-root"));
  }
}
