import { memo } from "react";
import "./Skeleton.css";

const Skeleton = memo(
    ({ height, width, borderRadius, boxShadow, padding, backroundColor }) => {
        const styles = {
            height,
            width,
            borderRadius,
            boxShadow,
            padding,
            backroundColor,
        };
        return <div style={styles} className="skeleton"></div>;
    }
);

export default Skeleton;
