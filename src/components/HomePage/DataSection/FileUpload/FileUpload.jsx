import React from "react";
import s from "./FileUpload.module.css";
import {connect} from "react-redux";
import {setFile, uploadFile} from "../../../../store/reducers/filesReducer";

const FileUpload = (props) => {
    const handleSubmit = () => {
        if (!props.file) return;
        props.uploadFile(props.file);
    };

    return (
        <div className={s.form}>
            <div className={s.fileSelectionBar}>
                <div className={s.fileName}>
                    {props.file ? props.file.name : "Имя файла"}
                </div>

                <label>
                    <div className={s.fileInputPlaceholder}>
                        <input onChange={(e) => props.setFile(e.target.files[0])}
                               type="file"
                               className={s.fileInput}
                        />
                    </div>
                </label>
            </div>
            <div onClick={handleSubmit} className={s.submit}>
                Загрузить файл
            </div>
        </div>
    )
};
const mstp = (state) => ({
    file: state.files.file,
});

export default connect(mstp, {
    setFile,
    uploadFile
})(FileUpload);