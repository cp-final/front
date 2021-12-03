import React from 'react';
import s from "./DropdownMenu.module.css";
import cn from "classnames";

const DropdownMenu = ({children, close, opened}) => {
    return (
        <div className={cn(s.wrapper, {[s.opened]: opened})} onMouseLeave={close}>
            {children}
        </div>
    )
};

export default DropdownMenu;