import React from 'react';
import DataSection from "./DataSection/DataSection";
import s from "./HomePage.module.css";
import FileUploadSection from "./FileUploadSection/FileUploadSection";

const HomePage = () => {
    return (
        <div className={s.wrapper}>
            <DataSection/>
            <FileUploadSection/>
        </div>
    )
};

export default HomePage;