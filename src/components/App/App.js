import React from "react";
import Navbar from "../Navbar/Navbar";
import {Route} from "react-router-dom";
import {config} from "../../config";
import {CSSTransition} from "react-transition-group";
import s from "./App.module.css";
import "./../../index.css";

const App = () => {
    const content = config.pages.map(page => {
            return (
                <Route exact key={page.path} path={page.path}>
                    {
                        ({match}) => {
                            return <CSSTransition
                                in={match != null}
                                timeout={200}
                                classNames="page"
                                unmountOnExit
                            >
                                    <page.Component/>
                            </CSSTransition>
                        }
                    }
                </Route>
            )
        }
    );
    return (
        <div className={s.app}>
            <Navbar/>
            <div className={s.pageWrapper}>
                {content}
            </div>
        </div>
    );
};

export default App;
