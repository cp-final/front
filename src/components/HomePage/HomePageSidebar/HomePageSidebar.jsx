import React from 'react';
import s from "./HomePageSidebar.module.css";
import {connect} from "react-redux";
import {setFile, uploadFile} from "../../../store/reducers/filesReducer";
import WithPreloader from "../../common/WithPreloader";
import Swoosh from "../../common/SVGs/Swoosh/Swoosh";
import Cross from "../../common/SVGs/Cross/Cross";

const HomePageSidebar = (props) => {
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
                <WithPreloader in={!props.fileUploadStatus.uploading} classNames={"page"}>
                    <Swoosh shown={props.fileUploadStatus.uploaded}/>
                    <Cross shown={props.fileUploadStatus.error}/>
                </WithPreloader>
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
})(HomePageSidebar);