import React from 'react';
import DataSection from "./DataSection/DataSection";
import s from "./HomePage.module.css";
import FileUpload from "./DataSection/FileUpload/FileUpload";
import HomePageSidebar from "./HomePageSidebar/HomePageSidebar";

const HomePage = () => {
    return (
        <div className={s.wrapper}>
            <FileUpload />
            <DataSection/>
            <HomePageSidebar/>
        </div>
    )
};

export default HomePage;