import React from "react";
import Navbar from "../Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {config} from "../../config";
import {CSSTransition} from "react-transition-group";
import "./../../index.css";

const App = () => {
    const content = config.pages.map(page => {
            return (
                <Route exact key={page.path} path={page.path}>
                    {
                        ({match}) => {
                            return <CSSTransition
                                in={match != null}
                                timeout={300}
                                classNames="page"
                                unmountOnExit
                            >
                                <div className="page">
                                    <page.Component/>
                                </div>
                            </CSSTransition>
                        }
                    }
                </Route>
            )
        }
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
