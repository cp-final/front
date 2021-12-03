import React from 'react';
import DataSection from "./DataSection/DataSection";
import s from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div className={s.wrapper}>
            <DataSection/>
        </div>
    )
};

export default HomePage;