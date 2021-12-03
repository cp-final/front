import React, {useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import {Route} from "react-router-dom";
import {config} from "../../config";
import {CSSTransition} from "react-transition-group";
import s from "./App.module.css";
import "./../../index.css";
import {connect} from "react-redux";
import {initialize} from "../../store/reducers/appReducer";
import AppInitializingPreloader from "../AppInitializingPreloader/AppInitializingPreloader";

const App = (props) => {
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

    useEffect(() => {
        if (!props.initialized) props.initialize();
    }, [props.initialized]);

    return (
        <>
            <CSSTransition
                in={!props.initialized}
                timeout={200}
                classNames="page"
                unmountOnExit
            >
                <AppInitializingPreloader/>
            </CSSTransition>

            <CSSTransition
                in={props.initialized}
                timeout={200}
                classNames="page"
                unmountOnExit
            >
                <div className={s.app}>
                    <Navbar/>
                    <div className={s.pageWrapper}>
                        {content}
                    </div>
                </div>
            </CSSTransition>
        </>
    );
};

const mstp = (state) => ({
    initialized: state.app.initialized
});

export default connect(mstp, {
    initialize
})(App);
