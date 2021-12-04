import React, {useEffect} from 'react';
import {connect} from "react-redux";
import DataTable from "./DataTable/DataTable";
import s from "./DataTableWidget.module.css";
import {getNewTableData, getTableData} from "../../store/reducers/dataReducer";
import TablePlaceholder from "./TablePlaceholder/TablePlaceholder";
import WithFade from "../common/WithFade/WithFade";

const DataTableWidget = ({
                             data, portion, portionsCount,
                             initialized, getTableData, isFetching,
                             getNewTableData
}) => {
    const ref = React.createRef();
    const load = () => {
        if (!initialized && !isFetching) getNewTableData();
        if (portion <= portionsCount && initialized && !isFetching) getTableData(portion);
    };

    const handleScroll = (e) => {
        if (e.target.scrollHeight <= e.target.scrollTop + e.target.offsetHeight) load();
    };

    return (
        <div ref={ref} className={s.wrapper} onScroll={handleScroll}>
            <WithFade isIn={!initialized}>
                <TablePlaceholder/>
            </WithFade>
            <WithFade isIn={initialized}>
                <DataTable data={data} isFetching={isFetching}/>
            </WithFade>
        </div>
    )
};

const mstp = (state) => ({
    data: state.data.tableData,
    portion: state.data.portion,
    portionsCount: state.data.portionsCount,
    initialized: state.data.initialized,
    isFetching: state.data.isFetchingTableData
});

export default connect(mstp, {getNewTableData, getTableData})(DataTableWidget);