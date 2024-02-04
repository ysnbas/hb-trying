import React from "react";
import styles from "./styles.module.css";
import Square from "@/component/square";
import Icon from "@/component/icon";
import Link from "next/link";

export default function AddLink() {
  return (
    <Link href="/add">
      <div className={styles.buttonWrapper}>
        <Square text={<Icon name={"FiPlus"} size="36" stroke-width="5" />} />
        <div className={styles.text}>SUBMIT A LINK</div>
      </div>
    </Link>
  );
}
