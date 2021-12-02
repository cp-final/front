import React from 'react';
import rowS from "../Row/Row.module.css";
import s from "./Title.module.css";
import cn from "classnames";

const Title = () => {
    return (
        <div className={cn(rowS.row, s.title)}>
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