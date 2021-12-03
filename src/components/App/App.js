import React from "react";
import Navbar from "../Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {config} from "../../config";

const App = () => {
    const content = config.pages.map(page =>
        <Route exact key={page.path} path={page.path} render={() => <page.Component />}/>
    );
    return (
        <div>
            <Navbar/>
            <Switch>
                {content}
            </Switch>
        </div>
    );
};

export default App;
