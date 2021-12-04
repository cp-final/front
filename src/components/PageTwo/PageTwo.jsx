import React from 'react';
import s from "./PageTwo.module.css";
import {connect} from "react-redux";
import WithFade from "../common/WithFade/WithFade";
import ChartPlaceholder from "../HomePage/HomePageSidebar/ChartWidget/ChartPlaceholder/ChartPlaceholder";

const PageTwo = ({initialized}) => {
    return (
        <div className={s.wrapper}>
            <WithFade isIn={initialized}>
                <div className={s.pageFake}>

                </div>
            </WithFade>
            <WithFade isIn={!initialized}>
                <ChartPlaceholder/>
            </WithFade>
        </div>
    )
};

const mstp = (state) => ({
    initialized: state.data.initialized
});

export default connect(mstp)(PageTwo);