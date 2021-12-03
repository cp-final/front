import React from 'react';
import s from "./Toolbar.module.css";

const Toolbar = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.toolsGroup}>
                <div className={s.tool}> </div>
                <div className={s.tool}> </div>
                <div className={s.tool}> </div>
            </div>
        </div>
    )
};

export default Toolbar;