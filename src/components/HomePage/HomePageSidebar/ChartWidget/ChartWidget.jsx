import React from 'react';
import s from "./ChartWidget.module.css";
import Chart from "./Chart";
import {connect} from "react-redux";

const ChartWidget = ({chartData}) => {
    return (
        <div className={s.wrapper}>

            {chartData && <Chart data={chartData}/>}
        </div>
    )
};

const mstp = (state) => ({
   chartData: state.data.chartData
});

export default connect(mstp)(ChartWidget);