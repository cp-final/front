import React, {useEffect} from 'react';
import {connect} from "react-redux";
import DataTable from "./DataTable/DataTable";
import s from "./DataTableWidget.module.css";
import {getNewTableData, getTableData} from "../../store/reducers/dataReducer";

const DataTableWidget = ({
                             data, portion, portionsCount,
                             initialized, getTableData, isFetching,
                             getNewTableData
}) => {
    const ref = React.createRef();
    const load = () => {
        if (portion <= portionsCount && initialized && !isFetching) getTableData(portion);
    };

    const handleScroll = (e) => {
        if (e.target.scrollHeight <= e.target.scrollTop + e.target.offsetHeight) load();
    };

    useEffect(() => {
        if (!initialized && !isFetching){
            getNewTableData();
            ref.current.scrollTop = 0;
        }
    }, [initialized, isFetching]);

    return (
        <div ref={ref} className={s.wrapper} onScroll={handleScroll}>
            <DataTable data={data} isFetching={isFetching}/>
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