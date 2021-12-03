import React from 'react';
import cn from 'classnames';
import s from './Checkbox.module.css';

export const Checkbox = ({checked, onChange}) => {
    return (
        <label className={s.wrapper}>
            <input className={s.nativeCheckbox} type="checkbox" checked={checked} onChange={onChange}/>
            <svg  className={cn(s.customCheckbox, {[s.checked]: checked})}>
                <path className={cn(s.swoosh, {[s.checked]: checked})}
                      d="M3 12 L8 17 L 18 4"
                />
            </svg>
        </label>
    )
};