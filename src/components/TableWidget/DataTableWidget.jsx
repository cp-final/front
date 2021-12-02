import React from 'react';
import {connect} from "react-redux";
import DataTable from "./DataTable/DataTable";
import s from "./DataTableWidget.module.css";

const DataTableWidget = ({data}) => {
    return (
        <div className={s.wrapper}>
            <DataTable data={data}/>
        </div>
    )
};

const mstp = (state) => ({
    data: state.data.tableData,
});

export default connect(mstp)(DataTableWidget);