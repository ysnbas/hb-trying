import React from "react";
import styles from "./styles.module.css";
import AddLink from "@/module/addLink";
import Square from "@/component/square";
import CustomSelectbox from "@/component/customSelectbox";
import Icon from "@/component/icon";

export default function ListPage() {
  const data = [
    {
      id: 1,
      name: "John",
      link: "https://www.google.com/",
      age: 25,
    },
    {
      id: 2,
      name: "Jane",
      link: "https://www.google.com/",
      age: 24,
    },
    {
      id: 3,
      name: "Jack",
      link: "https://www.google.com/",
      age: 26,
    },
  ];

  const options = [
    { value: "1", label: "Most Voted (Z -> A)" },
    { value: "2", label: "Less Voted (A -> Z)" },
  ];

  return (
    <div className={styles.list}>
      <AddLink />
      <hr />
      <CustomSelectbox options={options} />
      {data.map((item) => {
        return (
          <div className={styles.listWrapper} key={item.id}>
            <Square text={item.age} point={"POINTS"} />
            <div className={styles.rightWrapper}>
              <div>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.link}>{item.link}</p>
              </div>
              <div className={styles.voteWrapper}>
                <div className={styles.vote}>
                  <Icon name={"FiArrowUp"} stroke-width="5" /> Up Vote
                </div>
                <div className={styles.vote}>
                  <Icon name={"FiArrowDown"} stroke-width="5"/>
                  Down Vote
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
