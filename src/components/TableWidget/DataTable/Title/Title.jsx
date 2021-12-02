import React from 'react';
import rowS from "../Row/Row.module.css";
import s from "./Title.module.css";
import cn from "classnames";
import {connect} from "react-redux";
import {sortByNumber, sortBySegment} from "../../../../store/reducers/dataReducer";

const Title = (props) => {
    return (
        <div className={cn(rowS.row, s.title)}>
            <div className={cn(rowS.rowItem, s.title)} onClick={() => props.sortByNumber()}>
                Number
            </div>
            <div className={cn(rowS.rowItem, s.title)} onClick={() => props.sortBySegment()}>
                Segment
            </div>
        </div>
    )
};

export default connect(null, {
    sortByNumber,
    sortBySegment
})(Title);