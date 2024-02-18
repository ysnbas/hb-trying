import React, { useEffect, useState } from "react";
import Square from "@/component/square";
import Icon from "@/component/icon";
import styles from "./styles.module.css";
import Pagination from "@/component/pagination";
import Modal from "@/component/modal";

export default function DataGrid({ selectedOption }) {
  const [showModal, setShowModal] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState([]);
  const itemsPerPage = 5;

  let localData;
  let parsedData;
  if (typeof window !== "undefined") {
    localData = localStorage.getItem("data");
    parsedData = JSON.parse(localData);
  }

  const handleMouseOver = (e) => {
    setHoveredItem(e);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleRemoveItem = (item) => {
    const newData = parsedData.filter((dataItem) => dataItem.id !== item.id);
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
    setShowModal(false);
  };

  const renderRemoveModal = () => {
    return (
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={"Remove Link"}
        message={"Do you want remove:"}
        linkName={selectedItem?.name}
        handleRemoveItem={() => handleRemoveItem(selectedItem)}
      />
    );
  };

  const handleClickDelete = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  useEffect(() => {
    if (localData) {
      parsedData.sort((a, b) => b.point - a.point);
      localStorage.setItem("data", JSON.stringify(parsedData));
    }
  }, [currentPage]);

  const handleUpVote = (item) => {
    const newData = parsedData.map((dataItem) => {
      if (dataItem.id === item.id) {
        return { ...dataItem, point: dataItem.point + 1 };
      }
      return dataItem;
    });

    newData.sort((a, b) => b.point - a.point);
    newData.sort((a, b) => {
      if (a.point === b.point) {
        return parsedData.indexOf(a) - parsedData.indexOf(b);
      }
      return 0;
    });

    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  };

  const handleDownVote = (item) => {
    const newData = parsedData.map((dataItem) => {
      if (dataItem.id === item.id && dataItem.point !== 0) {
        return { ...dataItem, point: dataItem.point - 1 };
      }
      return dataItem;
    });

    newData.sort((a, b) => b.point - a.point);

    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    let sortedData = [...data];

    if (selectedOption === "1") {
      sortedData.sort((a, b) => b.point - a.point);
    } else if (selectedOption === "2") {
      sortedData.sort((a, b) => a.point - b.point);
    }

    return sortedData.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setData(localData ? JSON.parse(localData) : []);
  }, [localData]);

  return (
    <div>
      {getPageData()?.map((item, index) => {
        return (
          <div
            className={styles.listWrapper}
            key={item.id}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <Square text={item.point} point={"POINTS"} />
            <div className={styles.rightWrapper}>
              <div>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.link}>{item.link}</p>
              </div>
              <div className={styles.voteWrapper}>
                <div className={styles.vote} onClick={() => handleUpVote(item)}>
                  <Icon name={"FiArrowUp"} stroke-width="5" /> Up Vote
                </div>
                <div
                  className={styles.vote}
                  onClick={() => handleDownVote(item)}
                >
                  <Icon name={"FiArrowDown"} stroke-width="5" />
                  Down Vote
                </div>
              </div>
            </div>
            {hoveredItem === index && (
              <div
                className={styles.delete}
                onClick={() => handleClickDelete(item)}
              >
                <Icon name={"FiDelete"} color="red" />
              </div>
            )}
          </div>
        );
      })}
      <Pagination
        data={data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {renderRemoveModal(selectedItem)}
    </div>
  );
}
