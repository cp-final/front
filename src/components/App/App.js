import s from './App.module.css';
import {connect} from "react-redux";
import React from "react";
import TableWidget from "../TableWidget/DataTableWidget";
import {API} from "../../utils/api";

const App = (props) => {
    const handleClick = async () => {
        const data = await API.test();
        console.log(data);
    };

    return (
        <div onClick={handleClick}>
            <TableWidget/>
        </div>
    );
};

const mstp = (state) => ({
    number: state.app.number,
});

export default connect(mstp, {})(App);
