import { useEffect, useState } from "react";
import axios from "axios";
import "../Table/Table.css";

const Table = () => {
    const [data, setData] = useState([]);
    const [checkerValue, setCheckerValue] = useState();
    const [solutionValue, setSolutionValue] = useState();
    const [titleFilter, setTitleFilter] = useState("");
    const [sortBy, setSortBy] = useState("id");
    const [isActive, setIsActive] = useState(false);
    const [page, setPage] = useState(1);

    const getData = async () => {
        try {
            const res = await axios.get("https://kep.uz/api/problems", {
                params: {
                    title: titleFilter,
                    page,
                    page_size: 14,
                    pages_Count: 116,
                    ordering: sortBy,
                    has_checker: checkerValue,
                    has_solution: solutionValue,
                },
            });
            setData(res.data.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData();
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
        setIsActive((prev) => !prev);
    };
    const sortByName = () => {
        setSortBy("title");
        setIsActive((prev) => !prev);
    };

    const onNextPage = () => {
        setPage(page + 1);
    };
    const onPrevPage = () => {
        if(page > 1) {
            setPage(page - 1)
        };
    };

    return (
        <main>
            <div className="pagination">
                <button onClick={onPrevPage}>&laquo;</button>
                <span>{page}</span>
                <button onClick={onNextPage}>&raquo;</button>
            </div>
            <div className="filter">
                <div className="filter__search">
                    <input
                        placeholder="Search by name"
                        onChange={handleTitleChange}
                        type="text"
                        value={titleFilter}
                    />
                </div>
                <div className="filter__checker">
                    <label htmlFor="checker">Checker:</label>
                    <select
                        name="checker"
                        id="checker"
                        value={checkerValue}
                        onChange={handleCheckerChange}
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="filter__solution">
                    <label htmlFor="solution">Solution:</label>
                    <select
                        name="solution"
                        id="solution"
                        value={solutionValue}
                        onChange={handleSolutionChange}
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th
                            className={isActive ? "" : "active"}
                            onClick={sortById}
                        >
                            ID
                        </th>
                        <th
                            className={isActive ? "active" : ""}
                            onClick={sortByName}
                        >
                            Title
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default Table;
