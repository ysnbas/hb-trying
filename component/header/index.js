import React from "react";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>COM</div>
      <div className={styles.right}><b>Link</b>Vote Challenge</div>
    </div>
  );
}
