import React from "react";
import preloader from "./preloader.svg";
import s from "./Preloader.module.css";

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt=""/>
        </div>
    )
};

export default Preloader;