import React from 'react';
import pic from "./../../../../../assets/Vectary texture.svg";
import s from "./ChartPlaceholder.module.css";

const ChartPlaceholder = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.box}>
                <img src={pic} alt=""/>
                Ждем данные!
            </div>
        </div>
    )
};

export default ChartPlaceholder;