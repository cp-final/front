import React from 'react';
import rowS from "../Row/Row.module.css";

const Title = () => {
    return (
        <div className={rowS.row}>
            <div className={rowS.rowItem}>
                Number
            </div>
            <div className={rowS.rowItem}>
                Segment
            </div>
        </div>
    )
};

export default Title;