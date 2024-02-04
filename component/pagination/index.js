import React, { useState } from "react";
import styles from "./styles.module.css";

export default function Pagination({ data, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(data?.length / 5);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </button>
      {totalPages > 0 &&
        Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={currentPage === i + 1 ? styles.active : ""}
          >
            {i + 1}
          </button>
        ))}
      {totalPages > 5 && <span>...</span>}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
