"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import AddLink from "@/module/addLink";
import CustomSelectbox from "@/component/customSelectbox";

import DataGrid from "@/component/dataGrid";
export default function ListPage() {
  const [data, setData] = useState([]);

  const options = [
    { value: "1", label: "Most Voted (Z -> A)" },
    { value: "2", label: "Less Voted (A -> Z)" },
  ];

  return (
    <div className={styles.container}>
      <AddLink />
      <hr />
      <CustomSelectbox options={options} />
      <DataGrid />
    </div>
  );
}
