import React, {useEffect} from 'react';
import {connect} from "react-redux";
import DataTable from "./DataTable/DataTable";
import s from "./DataTableWidget.module.css";
import {getTableData} from "../../store/reducers/dataReducer";

const DataTableWidget = ({data, portion, portionsCount, initialized, getTableData}) => {

    const load = () => {
        if (portion === portionsCount && initialized) return;
        getTableData(portion);
    };

    useEffect(() => {
        if (!initialized) load();
    }, [initialized]);

    return (
        <div className={s.wrapper}>
            <DataTable data={data} loadData={() => load()}/>
        </div>
    )
};

const mstp = (state) => ({
    data: state.data.tableData,
    portion: state.data.portion,
    portionsCount: state.data.portionsCount,
    initialized: state.data.initialized
});

export default connect(mstp, {getTableData})(DataTableWidget);