import React from 'react';
import DataTableWidget from "../../TableWidget/DataTableWidget";
import s from "./DataSection.module.css";

const DataSection = (props) => {
    return (
        <div className={s.wrapper}>
            <div>
                <input type="text"/>
                <input type="submit"/>
            </div>
            <div className={s.widgetWrapper}>
                <DataTableWidget/>
            </div>
        </div>
    )
};

export default DataSection;