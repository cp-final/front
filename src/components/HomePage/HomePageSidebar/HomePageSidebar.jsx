import React from 'react';
import s from "./HomePageSidebar.module.css";
import ChartWidget from "./ChartWidget/ChartWidget";

const HomePageSidebar = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                Визуализация выбранных данных:
            </div>
            <div>
                <ChartWidget/>
            </div>
        </div>
    )
};

export default HomePageSidebar;