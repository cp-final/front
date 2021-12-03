import React from 'react';
import s from "./ProgressBar.module.css";

const ProgressBar = ({max, value}) => {
    const width = (value / max) * 100 % 101;
    return (
        <div className={s.wrapper}>
            <div className={s.progress}
                 style={{
                     width: `${width}%`
                 }}
            >

            </div>
        </div>
    )
};

export default ProgressBar;