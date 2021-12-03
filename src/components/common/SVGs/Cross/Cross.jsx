import React from 'react';
import s from "./Cross.module.css";
import cn from "classnames";

const Cross = ({shown}) => {
    return (
        <svg width={40} height={40}>
            <path className={cn(s.path, {[s.shown]: shown})}
                  d="M4 4 L36 36"
            />
            <path className={cn(s.path, {[s.shown]: shown})}
                  d="M4 36 L36 4"
            />
        </svg>
    )
};

export default Cross;