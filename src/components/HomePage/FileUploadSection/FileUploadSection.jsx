import React, {useState} from 'react';
import s from "./FileUploadSection.module.css";

const FileUploadSection = (props) => {
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!file) return;
        console.log(file);
    };

    return (
        <div className={s.wrapper}>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setFile(e.target.files[0])} type="file"/>
                <input type="submit"/>
            </form>
            {/*<a href="" download>download</a>*/}
        </div>
    )
};

export default FileUploadSection;