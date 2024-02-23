import { memo } from "react";
import Card from "../Card/Card";
import Skeleton from "../Skeleton/Skeleton";
import "./CardList.css";

const CardList = memo(({ data, isLoading }) => {
    if (isLoading) {
        return (
            <div className="card-items">
                {data &&
                    data.map((item) => (
                        <Skeleton
                            key={item.id}
                            width={"403px"}
                            borderRadius={"8px"}
                            height={"150px"}
                            padding={"25px"}
                            backroundColor={"#15171c"}
                        />
                    ))}
            </div>
        );
    }

    return (
        <div>
            <div className="card-items">
                {data.map((item) => (
                    <div key={item.id}>
                        <Card {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
});

export default CardList;
