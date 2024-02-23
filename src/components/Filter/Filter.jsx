import { memo } from "react";
import "./Filter.css";

const Filter = memo(
    ({
        titleFilter,
        checkerValue,
        solutionValue,
        handleTitleChange,
        handleSolutionChange,
        handleCheckerChange,
        sortById,
        sortByName,
        isActive,
    }) => {
        return (
            <>
                <div className="filter">
                    <input
                        className="filter__search"
                        placeholder="Search by title"
                        onChange={handleTitleChange}
                        type="text"
                        value={titleFilter}
                    />
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
                <div className="sort">
                    <button
                        className={isActive ? "sort__id" : "sort__id active"}
                        onClick={sortById}
                    >
                        Sort by ID
                    </button>
                    <button
                        className={
                            isActive ? "sort__name active" : "sort__name"
                        }
                        onClick={sortByName}
                    >
                        Sort by name
                    </button>
                </div>
            </>
        );
    }
);

export default Filter;
