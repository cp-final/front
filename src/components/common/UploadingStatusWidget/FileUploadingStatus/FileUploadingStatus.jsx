import React from 'react';
import s from './FileUploadingStatus.module.css';

const FileUploadingStatus = ({uploaded}) => {
    return (
        <div className={s.wrapper}>
            <div>Filename</div>
            <progress value={uploaded} max={100}/>
        </div>
    )
};

export default FileUploadingStatus;