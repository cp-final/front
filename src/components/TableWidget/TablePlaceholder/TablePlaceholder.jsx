import React from 'react';
import s from './TablePlaceholder.module.css';
import folderOpenGr from './../../../assets/FolderOpenGr.svg';

const TablePlaceholder = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div>Загрузите файл для начала работы</div>
                <div>
                    <div className={s.pic}>
                        <img src={folderOpenGr} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TablePlaceholder;