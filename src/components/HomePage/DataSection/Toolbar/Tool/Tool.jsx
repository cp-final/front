import React, {useState} from 'react';
import cn from "classnames";
import s from "../Toolbar.module.css";

const Tool = ({className, activeClassName, setter, active, children}) => {
    return (
        <div className={cn(s.tool, className, {[activeClassName]: active})}
             onMouseEnter={() => setter(true)}
             onMouseLeave={() => setter(false)}
        >
            {children}
        </div>
    )
};

export default Tool;