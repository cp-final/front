import React from 'react';
import s from "./Item.module.css";

const Item = ({children, callback}) => {
    return (
        <div onClick={callback} className={s.item}>
            {children}
        </div>
    )
};

export default Item;