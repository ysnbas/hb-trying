import React from "react";
import styles from "./styles.module.css";

export default function Button({ text, onclick }) {
  return (
    <button className={styles.button} onClick={onclick}>
      {text}
    </button>
  );
}
