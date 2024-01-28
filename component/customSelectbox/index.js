import React from "react";
import styles from "./styles.module.css";

export default function CustomSelectbox({ options }) {
  return (
    <div className={styles.selectContainer}>
      <select className={styles.select}>
        <option value="" disabled selected>
          Order By
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
