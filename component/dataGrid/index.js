import React, { useEffect, useState } from "react";
import Square from "@/component/square";
import Icon from "@/component/icon";
import styles from "./styles.module.css";
import Pagination from "@/component/pagination";
import Modal from "@/component/modal";

export default function DataGrid() {
  const [showModal, setShowModal] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState([]);
  const itemsPerPage = 5;

  const handleMouseOver = (e) => {
    setHoveredItem(e);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const renderRemoveModal = () => {
    return (
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={"Remove Link"}
        message={"Do you want remove:"}
        linkName={selectedItem?.name}
      />
    );
  };

  const handleClickDelete = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  useEffect(() => {
    const localData = localStorage.getItem("data");
    if (localData) {
      const parsedData = JSON.parse(localData);
      parsedData.sort((a, b) => b.point - a.point);
      localStorage.setItem("data", JSON.stringify(parsedData));
    }
  }, [currentPage]);

  const handleUpVote = (item) => {
    const localData = localStorage.getItem("data");
    const parsedData = JSON.parse(localData);
    const selectedItem = parsedData.find((dataItem) => dataItem.id === item.id);

    selectedItem.point = selectedItem.point + 1;
    localStorage.setItem("data", JSON.stringify(parsedData));
  };

  const handleDownVote = (item) => {
    const localData = localStorage.getItem("data");
    const parsedData = JSON.parse(localData);
    const selectedItem = parsedData.find((dataItem) => dataItem.id === item.id);
    if (selectedItem?.point !== 0) {
      selectedItem.point = selectedItem.point - 1;
      localStorage.setItem("data", JSON.stringify(parsedData));
    }
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data?.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const localData = localStorage.getItem("data");
    setData(localData ? JSON.parse(localData) : []);
  }, []);

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
