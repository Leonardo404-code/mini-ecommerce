import React, { useContext, useState } from "react";
import { Pagination as PaginationStyled } from "./styled";
import { ProductContext } from "../../context/ProductContext";

export function Pagination({ data, pageLimit, dataLimit }) {
  const { page, setPage } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(page);

  function goToNextPage() {
    setPage((page) => page + 1);
    setCurrentPage(page);
  }

  function goToPreviousPage() {
    setPage((page) => page - 1);
    setCurrentPage(page);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setPage(pageNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((page - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      <PaginationStyled className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`prev ${page === 1 ? "disabled" : ""}`}
        >
          Prev
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${page === item ? "active" : null}`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={goToNextPage}
          className={`next ${page === currentPage ? "disabled" : ""}`}
        >
          Next
        </button>
      </PaginationStyled>
    </>
  );
}
