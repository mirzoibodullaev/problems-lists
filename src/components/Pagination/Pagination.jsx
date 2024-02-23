import { memo } from "react";
import { generatePageNumbers } from "../../utils/paginationUtils";
import "./Pagination.css";

const Pagination = memo(({ onPageChange, currentPage, totalPages, isBtnActive }) => {
    const pageNumbers = generatePageNumbers(totalPages, currentPage);

    return (
        <div className="pagination">
            <button
                className="pagination__btn"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &laquo;
            </button>
            {pageNumbers.map((number, index) => (
                <button
                    key={index}
                    onClick={() => {
                        if (number !== "...") {
                            onPageChange(number);
                        }
                    }}
                    className={
                        (currentPage === number && isBtnActive) ||
                        (currentPage === 1 && number === 1)
                            ? "pagination__btn active"
                            : "pagination__btn"
                    }
                >
                    {number}
                </button>
            ))}
            <button
                className="pagination__btn"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                &raquo;
            </button>
        </div>
    );
});

export default Pagination;
