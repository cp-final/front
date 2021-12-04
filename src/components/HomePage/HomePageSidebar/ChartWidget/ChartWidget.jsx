import React from 'react';
import s from "./ChartWidget.module.css";
import Chart from "./Chart";
import {connect} from "react-redux";
import ChartPlaceholder from "./ChartPlaceholder/ChartPlaceholder";
import WithFade from "../../../common/WithFade/WithFade";

const ChartWidget = ({chartData}) => {
    return (
        <div className={s.wrapper}>
            <WithFade isIn={!chartData}>
                <ChartPlaceholder />
            </WithFade>
            <WithFade isIn={chartData}>
                <Chart data={chartData}/>
            </WithFade>
        </div>
    )
};

const mstp = (state) => ({
   chartData: state.data.chartData
});

export default connect(mstp)(ChartWidget);