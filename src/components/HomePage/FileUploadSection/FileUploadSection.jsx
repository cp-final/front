import React from 'react';
import s from "./FileUploadSection.module.css";
import {connect} from "react-redux";
import {setFile, uploadFile} from "../../../store/reducers/filesReducer";

const FileUploadSection = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!props.file) return;
        props.uploadFile();
    };

    return (
        <div className={s.wrapper}>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => props.setFile(e.target.files[0])} type="file"/>
                <input type="submit"/>
            </form>
            <div>
                {props.fileUploadStatus.uploading && "File is uploading"}
                {props.fileUploadStatus.uploaded && "File is uploaded"}
                {props.fileUploadStatus.error && "File uploading error"}
            </div>
        </div>
    )
};

const mstp = (state) => ({
    file: state.files.file,
    fileUploadStatus: state.files.fileUploadStatus
});

export default connect(mstp, {
    setFile,
    uploadFile
})(FileUploadSection);