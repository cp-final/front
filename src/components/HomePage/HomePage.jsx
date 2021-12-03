import React from 'react';
import DataSection from "./DataSection/DataSection";
import s from "./HomePage.module.css";
import FileUpload from "./DataSection/FileUpload/FileUpload";

const HomePage = () => {
    return (
        <div className={s.wrapper}>
            <FileUpload />
            <DataSection/>
        </div>
    )
};

export default HomePage;