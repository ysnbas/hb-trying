import React from "react";
import styles from "./styles.module.css";

export default function TextField({
  label,
  type,
  value,
  onChange,
  placeholder,
  name,
}) {
  return (
    <div className={styles.input}>
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.inputField}
        name={name}
      />
    </div>
  );
}
