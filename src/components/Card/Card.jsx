import { memo } from "react";
import { FaUserCheck } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import "./Card.css";

const CardItem = memo(({ title, solved, notSolved }) => {
    return (
        <div className="card">
            <p className="card__title">{title}</p>
            <div className="stats">
                <span className="solved">
                    {solved} <FaUserCheck />
                </span>
                <span className="unsolved">
                    {notSolved} <FaUserTimes />
                </span>
            </div>
        </div>
    );
});

export default CardItem;
