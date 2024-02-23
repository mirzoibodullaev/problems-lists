import axios from "axios";

const getData = async ({
    titleFilter,
    page,
    sortBy,
    checkerValue,
    solutionValue,
    setData,
    setTotalPage,
    setIsLoading,
}) => {
    try {
        setIsLoading(true);
        const res = await axios.get("https://kep.uz/api/problems", {
            params: {
                title: titleFilter,
                page,
                page_size: 9,
                ordering: sortBy,
                has_checker: checkerValue,
                has_solution: solutionValue,
            },
        });
        setData(res.data.data);
        setTotalPage(res.data.pagesCount);
    } catch (e) {
        console.log(e);
    } finally {
        setIsLoading(false);
    }
};

export default getData;
