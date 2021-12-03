import React from 'react';
import s from "./Swoosh.module.css";
import cn from "classnames";

const Swoosh = ({shown}) => {
    return (
        <svg width={40} height={40}>
            <path className={cn(s.path, {[s.shown]: shown})} d="M4 25 L15 36 L36 10"/>
        </svg>
    )
};

export default Swoosh;