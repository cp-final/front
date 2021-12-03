import React from 'react';
import rowS from "../Row/Row.module.css";
import s from "./Title.module.css";
import cn from "classnames";

const Title = (props) => {
    return (
        <div className={cn(rowS.row, s.title)}>
            <div className={cn(rowS.rowItem, s.title)}>
                Number
            </div>
            <div className={cn(rowS.rowItem, s.title)}>
                Segment
            </div>
        </div>
    )
};

export default Title;