import React from 'react';
import DataTableWidget from "../../TableWidget/DataTableWidget";
import s from "./DataSection.module.css";
import FileUpload from "./FileUpload/FileUpload";
import Toolbar from "./Toolbar/Toolbar";

const DataSection = (props) => {
    return (
        <div className={s.wrapper}>
            <FileUpload />
            <Toolbar/>
            <div className={s.widgetWrapper}>
                <DataTableWidget/>
            </div>
        </div>
    )
};

export default DataSection;