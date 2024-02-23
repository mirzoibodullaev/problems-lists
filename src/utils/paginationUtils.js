export const generatePageNumbers = (totalPages, currentPage, maxVisiblePages = 5) => {
    const pageNumbers = [];

    if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    } else {
        const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
        let startPage = currentPage - halfMaxVisiblePages;
        let endPage = currentPage + halfMaxVisiblePages;

        if (startPage < 1) {
            endPage += Math.abs(startPage) + 1;
            startPage = 1;
        } else if (endPage > totalPages) {
            startPage -= endPage - totalPages;
            endPage = totalPages;
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        if (startPage > 5) {
            pageNumbers.unshift("...");
        }
        if (endPage < totalPages) {
            pageNumbers.push("...");
        }
    }

    return pageNumbers;
};