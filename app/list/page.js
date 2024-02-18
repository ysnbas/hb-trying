"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import AddLink from "@/module/addLink";
import CustomSelectbox from "@/component/customSelectbox";

import DataGrid from "@/component/dataGrid";
export default function ListPage() {
  const [selectedOption, setSelectedOption] = useState(0);

  const options = [
    { value: "1", label: "Most Voted" },
    { value: "2", label: "Less Voted" },
  ];

  return (
    <div className={styles.container}>
      <AddLink />
      <hr />
      <CustomSelectbox
        options={options}
        setSelectedOption={setSelectedOption}
      />
      <DataGrid selectedOption={selectedOption} />
    </div>
  );
}
