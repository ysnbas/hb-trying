import React, { useState } from "react";
import styles from "./styles.module.css";

export default function CustomSelectbox({ options, setSelectedOption }) {
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className={styles.selectContainer}>
      <select className={styles.select} onChange={handleSelectChange}>
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
