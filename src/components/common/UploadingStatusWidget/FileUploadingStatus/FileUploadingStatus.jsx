import React from 'react';
import s from './FileUploadingStatus.module.css';
import ProgressBar from "../../ProgressBar/ProgressBar";

const FileUploadingStatus = ({filename,uploaded}) => {
    return (
        <div className={s.wrapper}>
            <div>{filename}</div>
            <div className={s.progressBarWrapper}>
                <ProgressBar value={uploaded} max={100}/>
            </div>
        </div>
    )
};

export default FileUploadingStatus;