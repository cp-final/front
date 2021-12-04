import React from 'react';
import preloader from "./../../assets/1uoA.gif";
import catest from "../../assets/CATEST.svg";
import analytics from "../../assets/analytics.svg";
import s from "./AppInitializingPreloader.module.css";

const AppInitializingPreloader = () => {
    return (
        <div className={s.wrapper}>
            <img src={preloader} alt=""/>
            <div className={s.logo}>
                <img src={catest} alt=""/>
                <img src={analytics} alt=""/>
            </div>
        </div>
    )
};

export default AppInitializingPreloader;