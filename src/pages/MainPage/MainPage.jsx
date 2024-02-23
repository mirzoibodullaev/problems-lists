import { useState, useEffect, memo } from "react";
import getData from "../../data/data";
import CardList from "../../components/CardList/CardList";
import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";

const MainPage = memo(() => {
    const [data, setData] = useState([]);
    const [checkerValue, setCheckerValue] = useState();
    const [solutionValue, setSolutionValue] = useState();
    const [titleFilter, setTitleFilter] = useState("");
    const [sortBy, setSortBy] = useState("id");
    const [isActive, setIsActive] = useState(false);
    const [isBtnActive, setIsBtnActive] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getData({
            titleFilter,
            page,
            sortBy,
            checkerValue,
            solutionValue,
            setData,
            setTotalPage,
            setIsLoading,
        });
    }, [checkerValue, solutionValue, titleFilter, sortBy, page]);

    const handleCheckerChange = (event) => {
        setCheckerValue(event.target.value);
    };

    const handleSolutionChange = (event) => {
        setSolutionValue(event.target.value);
    };
    const handleTitleChange = (event) => {
        setTitleFilter(event.target.value);
    };
    const sortById = () => {
        setSortBy("id");
        setIsActive(false);
    };
    const sortByName = () => {
        setSortBy("title");
        setIsActive(true);
    };

    const onPageChange = (pageNumber) => {
        setPage(pageNumber);
        setIsBtnActive(true);
    };

    return (
        <main className="container">
            <Filter
                isActive={isActive}
                checkerValue={checkerValue}
                titleFilter={titleFilter}
                solutionValue={solutionValue}
                handleCheckerChange={handleCheckerChange}
                handleTitleChange={handleTitleChange}
                handleSolutionChange={handleSolutionChange}
                sortById={sortById}
                sortByName={sortByName}
            />
            <CardList isLoading={isLoading} data={data} />
            <Pagination
                isBtnActive={isBtnActive}
                onPageChange={onPageChange}
                currentPage={page}
                totalPages={totalPage}
            />
        </main>
    );
});

export default MainPage;
