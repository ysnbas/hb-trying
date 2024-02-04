"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import TextField from "@/component/textField";
import Button from "@/component/button";
import Icon from "@/component/icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddPage() {
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("data");
    return localData ? JSON.parse(localData) : [];
  });

  const [inputValue, setInputValue] = useState({
    name: "",
    link: "",
    point: 0,
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function addLink() {
    if (!inputValue.name || !inputValue.link) {
      toast.error("Please fill all fields");
      return;
    }
    const newLink = {
      id: Math.floor(Math.random() * 1000),
      name: inputValue.name,
      link: inputValue.link,
      point: 0,
    };
    setData([...data, newLink]);
    setInputValue({ name: "", link: "" });
    toast.success(`${inputValue.name} added`);
  }

  return (
    <div className={styles.container}>
      <ToastContainer
        hideProgressBar={true}
        position="top-center"
        autoClose={3000}
        theme="colored"
      />
      <div className={styles.content}>
        <Link href="/list">
          <div className={styles.returnList}>
            <Icon name={"FiArrowLeft"} />
            Return To List
          </div>
        </Link>
        <h1>Add New Link</h1>
        <TextField
          label="Link Name"
          type="text"
          name={"name"}
          value={inputValue.name}
          placeholder={"e.g. Alphabet"}
          onChange={(e) =>
            setInputValue({ ...inputValue, name: e.target.value })
          }
        />
        <TextField
          label="Link URL"
          type="text"
          name={"link"}
          value={inputValue.link}
          placeholder={"e.g. http://abc.xyz"}
          onChange={(e) =>
            setInputValue({ ...inputValue, link: e.target.value })
          }
        />
        <div className={styles.buttonWrapper}>
          <Button text="ADD" onclick={() => addLink()} />
        </div>
      </div>
    </div>
  );
}
