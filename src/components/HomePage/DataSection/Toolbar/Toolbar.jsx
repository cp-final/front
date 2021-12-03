import React from 'react';
import s from "./Toolbar.module.css";
import chartPieSlice from "./../../../../assets/ChartPieSlice.svg";
import slidersHorizontal from "./../../../../assets/SlidersHorizontal.svg";
import wrench from "./../../../../assets/Wrench.svg";

const Toolbar = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.toolsGroup}>
                <div className={s.tool}>
                    <img src={chartPieSlice} alt=""/>
                </div>
                <div className={s.tool}>
                    <img src={slidersHorizontal} alt=""/>
                </div>
                <div className={s.tool}>
                    <img src={wrench} alt=""/>
                </div>
            </div>
        </div>
    )
};

export default Toolbar;