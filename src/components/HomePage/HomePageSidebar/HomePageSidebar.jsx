import React from 'react';
import s from "./HomePageSidebar.module.css";
import {NavLink} from "react-router-dom";
import {config} from "../../../config";

const HomePageSidebar = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                Визуализация выбранных данных:
            </div>
            <div>
                График
            </div>
            <div className={s.redirect}>
                <NavLink to={config.pages[1].path} className={s.link}>
                    Перейти в точные графики
                </NavLink>
            </div>
        </div>
    )
};

export default HomePageSidebar;