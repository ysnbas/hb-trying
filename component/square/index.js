import React from "react";
import styles from "./styles.module.css";

export default function Square({ text, point }) {
  return (
    <button className={styles.button}>
      <span className={styles.text}>{text}</span>
      {point && <span className={styles.point}>{point}</span>}
    </button>
  );
}
