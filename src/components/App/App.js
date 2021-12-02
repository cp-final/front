import {connect} from "react-redux";
import React from "react";
import TableWidget from "../TableWidget/DataTableWidget";

const App = (props) => {
    return (
        <div>
            <TableWidget/>
        </div>
    );
};

const mstp = () => ({

});

export default connect(mstp, {})(App);
